import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'
import Stripe from 'https://esm.sh/stripe@14.5.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface RequestBody {
  organization_id: string
  email: string
  organization_name: string
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
    const { organization_id, email, organization_name }: RequestBody = await req.json()

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

    // Check if Connect account already exists
    if (organization.stripe_connect_account_id) {
      // Account already exists, create onboarding link
      const accountLink = await stripe.accountLinks.create({
        account: organization.stripe_connect_account_id,
        refresh_url: `${Deno.env.get('FRONTEND_URL')}/account-settings`,
        return_url: `${Deno.env.get('FRONTEND_URL')}/account-settings`,
        type: 'account_onboarding',
      })

      return new Response(
        JSON.stringify({ 
          onboarding_url: accountLink.url,
          account_id: organization.stripe_connect_account_id 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Create new Stripe Connect Express account
    const account = await stripe.accounts.create({
      type: 'express',
      country: 'US', // Default to US, can be made configurable
      email: email,
      business_type: 'individual', // Default to individual, can be made configurable
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      business_profile: {
        name: organization_name,
        product_description: 'Equestrian services and horse management',
        support_email: email,
        url: Deno.env.get('FRONTEND_URL'),
      },
      metadata: {
        organization_id: organization_id,
        platform: 'barnboss',
      },
    })

    // Update organization with Stripe Connect account ID
    const { error: updateError } = await supabaseClient
      .from('organizations')
      .update({
        stripe_connect_account_id: account.id,
        stripe_onboarding_completed: false,
        stripe_charges_enabled: false,
        stripe_payouts_enabled: false,
      })
      .eq('id', organization_id)

    if (updateError) {
      console.error('Failed to update organization:', updateError)
      throw new Error('Failed to update organization')
    }

    // Create account onboarding link
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: `${Deno.env.get('FRONTEND_URL')}/account-settings`,
      return_url: `${Deno.env.get('FRONTEND_URL')}/account-settings`,
      type: 'account_onboarding',
    })

    return new Response(
      JSON.stringify({ 
        onboarding_url: accountLink.url,
        account_id: account.id 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error creating Connect account:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to create Connect account' 
      }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
}) 