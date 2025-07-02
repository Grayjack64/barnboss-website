import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'
import Stripe from 'https://esm.sh/stripe@14.5.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface SubscriptionTier {
  id: string
  name: string
  price: number
  stripe_price_id: string
  features: string[]
}

const SUBSCRIPTION_TIERS: Record<string, SubscriptionTier> = {
  personal_plus: {
    id: 'personal_plus',
    name: 'Personal Plus',
    price: 999, // $9.99 in cents
    stripe_price_id: 'price_1RgR4PPortu03WmTrjGMeesQ',
    features: ['Enhanced tracking', 'Advanced reports', 'Priority support']
  },
  premium: {
    id: 'premium',
    name: 'Premium (Ranch)',
    price: 4999, // $49.99 in cents
    stripe_price_id: 'price_1Rfjq6Portu03WmTqnJ5zVeh',
    features: ['Multi-horse management', 'Team collaboration', 'Advanced analytics']
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    price: 24900, // $249 in cents
    stripe_price_id: 'price_1RfjpePortu03WmTwkXDNUTr',
    features: ['Invoice & collect payments', 'Client management', 'Marketplace access']
  }
}

interface RequestBody {
  user_id: string
  organization_id: string
  subscription_tier: string
  success_url?: string
  cancel_url?: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get auth user
    const authHeader = req.headers.get('Authorization')!
    const token = authHeader.replace('Bearer ', '')
    const { data: user, error: userError } = await supabaseClient.auth.getUser(token)

    if (userError || !user.user) {
      throw new Error('Unauthorized')
    }

    // Parse request body
    const { 
      user_id, 
      organization_id, 
      subscription_tier, 
      success_url, 
      cancel_url 
    }: RequestBody = await req.json()

    // Verify subscription tier exists
    const tier = SUBSCRIPTION_TIERS[subscription_tier]
    if (!tier) {
      throw new Error('Invalid subscription tier')
    }

    // Verify user owns this organization
    const { data: organization, error: orgError } = await supabaseClient
      .from('organizations')
      .select('*')
      .eq('id', organization_id)
      .eq('owner_id', user.user.id)
      .single()

    if (orgError || !organization) {
      throw new Error('Organization not found or access denied')
    }

    // Get or create Stripe customer
    let customerId = organization.stripe_customer_id
    
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.user.email,
        name: organization.name,
        metadata: {
          user_id: user.user.id,
          organization_id: organization_id,
          platform: 'barnboss',
        },
      })
      
      customerId = customer.id

      // Update organization with customer ID
      await supabaseClient
        .from('organizations')
        .update({ stripe_customer_id: customerId })
        .eq('id', organization_id)
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: tier.stripe_price_id,
          quantity: 1,
        },
      ],
      success_url: success_url || `${Deno.env.get('FRONTEND_URL')}/account-settings?success=true`,
      cancel_url: cancel_url || `${Deno.env.get('FRONTEND_URL')}/account-settings?canceled=true`,
      metadata: {
        user_id: user.user.id,
        organization_id: organization_id,
        subscription_tier: subscription_tier,
        platform: 'barnboss',
      },
      subscription_data: {
        metadata: {
          user_id: user.user.id,
          organization_id: organization_id,
          subscription_tier: subscription_tier,
          platform: 'barnboss',
        },
      },
      // Platform fee for Pro users (they can collect payments)
      ...(subscription_tier === 'pro' && {
        payment_intent_data: {
          application_fee_amount: Math.floor(tier.price * 0.10), // 10% platform fee for Pro users
        },
      }),
    })

    // Create subscription record in database
    const { error: subError } = await supabaseClient
      .from('stripe_subscriptions')
      .insert({
        stripe_subscription_id: session.subscription,
        stripe_customer_id: customerId,
        organization_id: organization_id,
        user_id: user.user.id,
        subscription_tier: subscription_tier,
        status: 'pending',
        current_period_start: new Date().toISOString(),
        current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
        created_at: new Date().toISOString(),
      })

    if (subError) {
      console.error('Failed to create subscription record:', subError)
      // Don't throw error - let Stripe session proceed, webhook will handle it
    }

    return new Response(
      JSON.stringify({ 
        checkout_url: session.url,
        session_id: session.id 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error creating subscription checkout:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to create subscription checkout' 
      }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
}) 