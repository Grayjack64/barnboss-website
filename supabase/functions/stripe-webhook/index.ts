import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@13.0.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
)

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')
  
  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 })
  }
  
  const body = await req.text()
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      Deno.env.get('STRIPE_WEBHOOK_SECRET')!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  console.log(`Processing webhook event: ${event.type}`)

  // Log webhook event for debugging
  const { error: logError } = await supabase
    .from('stripe_webhook_events')
    .insert({
      stripe_event_id: event.id,
      event_type: event.type,
      payload: event.data,
      processed: false
    })

  if (logError) {
    console.error('Error logging webhook event:', logError)
  }

  try {
    // Handle different webhook events
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session)
        break

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await handleSubscriptionUpdate(event.data.object as Stripe.Subscription)
        break

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription)
        break

      case 'invoice.payment_succeeded':
        await handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice)
        break

      case 'invoice.payment_failed':
        await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice)
        break

      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent)
        break

      case 'account.updated':
        await handleAccountUpdated(event.data.object as Stripe.Account)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    // Mark webhook as processed
    await supabase
      .from('stripe_webhook_events')
      .update({ 
        processed: true, 
        processed_at: new Date().toISOString() 
      })
      .eq('stripe_event_id', event.id)

    return new Response(JSON.stringify({ received: true }), {
      headers: { "Content-Type": "application/json" },
    })

  } catch (error) {
    console.error('Error processing webhook:', error)
    
    // Update webhook log with error
    await supabase
      .from('stripe_webhook_events')
      .update({ 
        last_processing_error: error.message,
        processing_attempts: 1
      })
      .eq('stripe_event_id', event.id)

    return new Response(
      JSON.stringify({ error: 'Webhook processing failed' }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
})

// Handle checkout session completion
async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  console.log('Processing checkout completion:', session.id)

  if (session.mode === 'subscription' && session.subscription) {
    // Get the subscription details
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string)
    
    // Determine subscription tier from price ID
    const subscriptionTier = session.metadata?.subscription_tier || 'personal'
    
    const subscriptionData = {
      user_id: session.metadata?.user_id,
      organization_id: session.metadata?.organization_id || null,
      stripe_subscription_id: subscription.id,
      stripe_customer_id: subscription.customer as string,
      subscription_tier: subscriptionTier,
      status: subscription.status,
      current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
      trial_start: subscription.trial_start ? new Date(subscription.trial_start * 1000).toISOString() : null,
      trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null,
      metadata: session.metadata || {},
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    // Insert or update subscription
    const { error: subError } = await supabase
      .from('stripe_subscriptions')
      .upsert(subscriptionData, { onConflict: 'stripe_subscription_id' })

    if (subError) {
      throw new Error(`Failed to update subscription: ${subError.message}`)
    }

    // Update organization with new subscription tier and customer ID
    if (session.metadata?.organization_id) {
      const { error: orgError } = await supabase
        .from('organizations')
        .update({ 
          subscription_tier: subscriptionTier,
          stripe_customer_id: subscription.customer as string,
          updated_at: new Date().toISOString()
        })
        .eq('id', session.metadata.organization_id)

      if (orgError) {
        console.error('Failed to update organization:', orgError)
      }
    }

    // Update user profile with customer ID
    if (session.metadata?.user_id) {
      const { error: profileError } = await supabase
        .from('user_account_profiles')
        .update({ 
          stripe_customer_id: subscription.customer as string,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', session.metadata.user_id)

      if (profileError) {
        console.error('Failed to update user profile:', profileError)
      }
    }
  }
}

// Handle subscription updates
async function handleSubscriptionUpdate(subscription: Stripe.Subscription) {
  console.log('Processing subscription update:', subscription.id)

  const updateData = {
    status: subscription.status,
    current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
    current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
    cancel_at_period_end: subscription.cancel_at_period_end,
    canceled_at: subscription.canceled_at ? new Date(subscription.canceled_at * 1000).toISOString() : null,
    trial_start: subscription.trial_start ? new Date(subscription.trial_start * 1000).toISOString() : null,
    trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null,
    updated_at: new Date().toISOString()
  }

  const { error } = await supabase
    .from('stripe_subscriptions')
    .update(updateData)
    .eq('stripe_subscription_id', subscription.id)

  if (error) {
    throw new Error(`Failed to update subscription: ${error.message}`)
  }
}

// Handle subscription deletion
async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log('Processing subscription deletion:', subscription.id)

  // Update subscription status to canceled
  const { error } = await supabase
    .from('stripe_subscriptions')
    .update({ 
      status: 'canceled',
      canceled_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })
    .eq('stripe_subscription_id', subscription.id)

  if (error) {
    throw new Error(`Failed to update canceled subscription: ${error.message}`)
  }

  // Optionally downgrade user account type to 'personal'
  const { data: subData } = await supabase
    .from('stripe_subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', subscription.id)
    .single()

  if (subData?.user_id) {
    await supabase
      .from('user_account_profiles')
      .update({ account_type: 'personal' })
      .eq('user_id', subData.user_id)
  }
}

// Handle successful invoice payments
async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log('Processing successful invoice payment:', invoice.id)

  // Record payment in history
  const paymentData = {
    user_id: invoice.metadata?.user_id,
    organization_id: invoice.metadata?.organization_id || null,
    invoice_id: invoice.metadata?.invoice_id || null,
    stripe_payment_intent_id: invoice.payment_intent as string,
    amount: invoice.amount_paid / 100, // Convert from cents
    currency: invoice.currency,
    status: 'succeeded',
    payment_method_type: 'card', // You might want to determine this more accurately
    stripe_fee: invoice.tax ? invoice.tax / 100 : 0,
    net_amount: (invoice.amount_paid - (invoice.tax || 0)) / 100,
    metadata: invoice.metadata || {}
  }

  const { error: paymentError } = await supabase
    .from('payment_history')
    .insert(paymentData)

  if (paymentError) {
    console.error('Failed to record payment:', paymentError)
  }

  // Update invoice status if it's one of our invoices
  if (invoice.metadata?.invoice_id) {
    const { error: invoiceError } = await supabase
      .from('invoices')
      .update({ 
        status: 'paid',
        paid_date: new Date().toISOString(),
        stripe_invoice_id: invoice.id,
        stripe_payment_intent_id: invoice.payment_intent as string
      })
      .eq('id', invoice.metadata.invoice_id)

    if (invoiceError) {
      console.error('Failed to update invoice status:', invoiceError)
    }
  }
}

// Handle failed invoice payments
async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  console.log('Processing failed invoice payment:', invoice.id)

  // Record failed payment attempt
  const paymentData = {
    user_id: invoice.metadata?.user_id,
    organization_id: invoice.metadata?.organization_id || null,
    invoice_id: invoice.metadata?.invoice_id || null,
    stripe_payment_intent_id: invoice.payment_intent as string,
    amount: invoice.amount_due / 100,
    currency: invoice.currency,
    status: 'failed',
    failure_reason: 'Payment failed',
    metadata: invoice.metadata || {}
  }

  const { error: paymentError } = await supabase
    .from('payment_history')
    .insert(paymentData)

  if (paymentError) {
    console.error('Failed to record failed payment:', paymentError)
  }
}

// Handle successful payment intents
async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log('Processing successful payment intent:', paymentIntent.id)

  // This handles one-time payments (like invoice payments via payment links)
  if (paymentIntent.metadata?.invoice_id) {
    const { error } = await supabase
      .from('invoices')
      .update({ 
        status: 'paid',
        paid_date: new Date().toISOString(),
        stripe_payment_intent_id: paymentIntent.id
      })
      .eq('id', paymentIntent.metadata.invoice_id)

    if (error) {
      console.error('Failed to update invoice after payment:', error)
    }
  }
}

// Handle Stripe Connect account updates
async function handleAccountUpdated(account: Stripe.Account) {
  console.log('Processing account update:', account.id)

  // Update organization or user profile with Connect account status
  const updateData = {
    stripe_onboarding_completed: account.details_submitted || false,
    stripe_charges_enabled: account.charges_enabled || false,
    stripe_payouts_enabled: account.payouts_enabled || false
  }

  // Try to update organization first
  const { error: orgError } = await supabase
    .from('organizations')
    .update(updateData)
    .eq('stripe_connect_account_id', account.id)

  if (orgError) {
    // If no organization found, try user profile
    const { error: userError } = await supabase
      .from('user_account_profiles')
      .update(updateData)
      .eq('stripe_connect_account_id', account.id)

    if (userError) {
      console.error('Failed to update account status:', userError)
    }
  }
} 