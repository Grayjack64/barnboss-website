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

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { price_id, user_id, plan_type, success_url, cancel_url } = await req.json()

    // Validate required fields
    if (!price_id || !user_id || !plan_type) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: price_id, user_id, plan_type' }),
        { 
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      )
    }

    // Get user profile from database
    const { data: profile, error: profileError } = await supabase
      .from('user_account_profiles')
      .select('*')
      .eq('user_id', user_id)
      .single()

    if (profileError || !profile) {
      return new Response(
        JSON.stringify({ error: 'User not found' }),
        { 
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      )
    }

    // Get user email from auth
    const { data: { user }, error: userError } = await supabase.auth.admin.getUserById(user_id)

    if (userError || !user?.email) {
      return new Response(
        JSON.stringify({ error: 'User email not found' }),
        { 
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      )
    }

    let customer_id = profile.stripe_customer_id

    // Create Stripe customer if doesn't exist
    if (!customer_id) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: profile.display_name || user.email,
        metadata: {
          user_id: user_id,
          plan_type: plan_type
        }
      })
      customer_id = customer.id

      // Update profile with customer ID
      const { error: updateError } = await supabase
        .from('user_account_profiles')
        .update({ stripe_customer_id: customer_id })
        .eq('user_id', user_id)

      if (updateError) {
        console.error('Failed to update user profile with customer ID:', updateError)
      }
    }

    // Set default URLs if not provided
    const defaultSuccessUrl = success_url || `${new URL(req.url).origin}/dashboard?session_id={CHECKOUT_SESSION_ID}`
    const defaultCancelUrl = cancel_url || `${new URL(req.url).origin}/pricing`

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customer_id,
      line_items: [{
        price: price_id,
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: defaultSuccessUrl,
      cancel_url: defaultCancelUrl,
      subscription_data: {
        metadata: {
          user_id: user_id,
          plan_type: plan_type,
          organization_id: profile.organization_id || ''
        },
        trial_period_days: plan_type === 'personal' ? 0 : 14 // 14-day trial for paid plans
      },
      metadata: {
        user_id: user_id,
        plan_type: plan_type,
        organization_id: profile.organization_id || ''
      },
      billing_address_collection: 'required',
      payment_method_types: ['card'],
      allow_promotion_codes: true
    })

    return new Response(
      JSON.stringify({ 
        sessionId: session.id,
        url: session.url 
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    )

  } catch (error) {
    console.error('Error creating checkout session:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    )
  }
}) 