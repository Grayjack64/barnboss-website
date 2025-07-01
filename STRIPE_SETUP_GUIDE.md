# BarnBoss Stripe Setup Guide

## Overview
Complete setup guide for integrating Stripe Connect with BarnBoss's corrected pricing structure:

- **Personal**: Free
- **Personal Plus**: $9.99/month  
- **Premium (Ranch)**: $49.99/month
- **Pro**: $249/month

## Prerequisites

### 1. Stripe Account Setup
1. Create a Stripe account at https://stripe.com
2. Complete business verification
3. Enable Stripe Connect in Dashboard → Settings → Connect

### 2. Database Migrations
Execute the following migrations manually in your Supabase SQL editor:

```sql
-- Execute migrations/001_add_stripe_fields_to_user_profiles.sql
-- Execute migrations/002_add_stripe_fields_to_organizations.sql  
-- Execute migrations/003_enhance_invoices_with_stripe.sql
-- Execute migrations/004_create_stripe_subscriptions_and_webhooks.sql
```

### 3. Environment Variables
Add to your `.env` file:

```env
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
STRIPE_CONNECT_CLIENT_ID=ca_your_connect_client_id_here

# Supabase (existing)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Stripe Dashboard Configuration

### 1. Create Products and Prices

Execute in Stripe CLI or Dashboard:

```bash
# Personal Plus - $9.99/month
stripe products create \
  --name="Personal Plus" \
  --description="Advanced horse management with analytics and health tracking"

stripe prices create \
  --product=prod_personal_plus_id \
  --unit-amount=999 \
  --currency=usd \
  --recurring[interval]=month \
  --lookup-key=personal_plus_monthly

# Premium (Ranch) - $49.99/month
stripe products create \
  --name="Premium (Ranch)" \
  --description="Complete ranch management with unlimited horses and team collaboration"

stripe prices create \
  --product=prod_premium_id \
  --unit-amount=4999 \
  --currency=usd \
  --recurring[interval]=month \
  --lookup-key=premium_monthly

# Pro - $249/month
stripe products create \
  --name="Pro" \
  --description="Full marketplace capabilities with client management and invoicing"

stripe prices create \
  --product=prod_pro_id \
  --unit-amount=24900 \
  --currency=usd \
  --recurring[interval]=month \
  --lookup-key=pro_monthly
```

### 2. Configure Stripe Connect

1. Go to Connect → Settings
2. Set your branding (logo, colors)
3. Configure webhooks: `https://yourdomain.com/api/webhooks/stripe`
4. Enable required capabilities:
   - `card_payments`
   - `transfers`

### 3. Webhook Configuration

Required webhook events:
- `account.updated`
- `checkout.session.completed`
- `invoice.payment_succeeded`
- `invoice.payment_failed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `payment_intent.succeeded`
- `payment_intent.payment_failed`

## Supabase Edge Functions

Create the following Edge Functions:

### 1. Create Checkout Session

File: `supabase/functions/create-checkout-session/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@12.0.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2022-11-15',
})

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
)

serve(async (req) => {
  try {
    const { price_id, user_id, plan_type } = await req.json()

    // Get user from database
    const { data: profile } = await supabase
      .from('user_account_profiles')
      .select('*')
      .eq('user_id', user_id)
      .single()

    if (!profile) {
      throw new Error('User not found')
    }

    let customer_id = profile.stripe_customer_id

    // Create customer if doesn't exist
    if (!customer_id) {
      const customer = await stripe.customers.create({
        email: profile.email,
        metadata: {
          user_id: user_id,
          plan_type: plan_type
        }
      })
      customer_id = customer.id

      // Update profile with customer ID
      await supabase
        .from('user_account_profiles')
        .update({ stripe_customer_id: customer_id })
        .eq('user_id', user_id)
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customer_id,
      line_items: [{
        price: price_id,
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: `${req.headers.get('origin')}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/pricing`,
      subscription_data: {
        metadata: {
          user_id: user_id,
          plan_type: plan_type
        },
        trial_period_days: 14 // 14-day free trial
      },
      metadata: {
        user_id: user_id,
        plan_type: plan_type
      }
    })

    return new Response(
      JSON.stringify({ sessionId: session.id }),
      { 
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
})
```

### 2. Create Payment Link

File: `supabase/functions/create-payment-link/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from 'https://esm.sh/stripe@12.0.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2022-11-15',
})

serve(async (req) => {
  try {
    const { 
      invoice_id, 
      amount, 
      customer_email, 
      customer_name, 
      description,
      metadata 
    } = await req.json()

    // Create payment link
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{
        price_data: {
          currency: 'usd',
          unit_amount: amount,
          product_data: {
            name: description,
          },
        },
        quantity: 1,
      }],
      metadata: metadata,
      after_completion: {
        type: 'redirect',
        redirect: {
          url: `${req.headers.get('origin')}/invoice-paid?invoice_id=${invoice_id}`
        }
      }
    })

    return new Response(
      JSON.stringify({ 
        id: paymentLink.id,
        url: paymentLink.url 
      }),
      { 
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
})
```

### 3. Stripe Webhook Handler

File: `supabase/functions/stripe-webhook/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@12.0.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2022-11-15',
})

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
)

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')
  const body = await req.text()
  
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      Deno.env.get('STRIPE_WEBHOOK_SECRET')!
    )
  } catch (err) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  // Log webhook event
  await supabase.from('stripe_webhook_events').insert({
    stripe_event_id: event.id,
    event_type: event.type,
    payload: event.data,
    processed: false
  })

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session
      
      if (session.mode === 'subscription') {
        // Handle subscription creation
        const subscription = await stripe.subscriptions.retrieve(session.subscription as string)
        
        await supabase.from('stripe_subscriptions').insert({
          user_id: session.metadata?.user_id,
          stripe_subscription_id: subscription.id,
          stripe_customer_id: subscription.customer as string,
          status: subscription.status,
          plan_type: session.metadata?.plan_type,
          current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
          current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
          metadata: session.metadata || {}
        })

        // Update user profile
        await supabase
          .from('user_account_profiles')
          .update({ 
            account_type: session.metadata?.plan_type,
            stripe_customer_id: subscription.customer as string
          })
          .eq('user_id', session.metadata?.user_id)
      }
      break

    case 'customer.subscription.updated':
      const updatedSub = event.data.object as Stripe.Subscription
      
      await supabase
        .from('stripe_subscriptions')
        .update({
          status: updatedSub.status,
          current_period_start: new Date(updatedSub.current_period_start * 1000).toISOString(),
          current_period_end: new Date(updatedSub.current_period_end * 1000).toISOString(),
          cancel_at_period_end: updatedSub.cancel_at_period_end,
          canceled_at: updatedSub.canceled_at ? new Date(updatedSub.canceled_at * 1000).toISOString() : null
        })
        .eq('stripe_subscription_id', updatedSub.id)
      break

    case 'invoice.payment_succeeded':
      const invoice = event.data.object as Stripe.Invoice
      
      // Record payment
      await supabase.from('payment_history').insert({
        user_id: invoice.metadata?.user_id,
        stripe_payment_intent_id: invoice.payment_intent as string,
        amount: invoice.amount_paid / 100,
        currency: invoice.currency,
        status: 'succeeded',
        metadata: invoice.metadata || {}
      })
      break

    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  // Mark webhook as processed
  await supabase
    .from('stripe_webhook_events')
    .update({ processed: true, processed_at: new Date().toISOString() })
    .eq('stripe_event_id', event.id)

  return new Response(JSON.stringify({ received: true }), {
    headers: { "Content-Type": "application/json" },
  })
})
```

## Deploy Edge Functions

```bash
# Deploy all functions
supabase functions deploy create-checkout-session
supabase functions deploy create-payment-link  
supabase functions deploy stripe-webhook

# Set secrets
supabase secrets set STRIPE_SECRET_KEY=sk_test_your_key_here
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

## Testing

### 1. Test Credit Cards
Use Stripe's test card numbers:
- `4242424242424242` - Visa (succeeds)
- `4000000000000002` - Visa (declined)

### 2. Test Subscription Flow
1. Go to `/pricing` page
2. Select a paid plan
3. Complete checkout with test card
4. Verify subscription created in database

### 3. Test Invoice Generation
1. Login as Pro user
2. Go to billing section
3. Create invoice with test data
4. Verify payment link generated

## Production Checklist

- [ ] Replace test API keys with live keys
- [ ] Update webhook URL to production domain
- [ ] Configure live payment methods
- [ ] Set up monitoring and alerts
- [ ] Test all flows in production
- [ ] Configure tax collection if required

## Support

For Stripe-specific issues:
- Stripe Documentation: https://stripe.com/docs
- Stripe Connect Guide: https://stripe.com/docs/connect

For BarnBoss integration:
- Check webhook event logs in Stripe Dashboard
- Review Supabase Edge Function logs
- Monitor database for failed payments/subscriptions 