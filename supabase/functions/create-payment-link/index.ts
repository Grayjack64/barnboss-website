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
    const { 
      invoice_id, 
      amount, 
      customer_email, 
      customer_name, 
      description,
      line_items,
      metadata 
    } = await req.json()

    // Validate required fields
    if (!invoice_id || !amount || !customer_email || !description) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields: invoice_id, amount, customer_email, description' 
        }),
        { 
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      )
    }

    // Verify invoice exists and get details
    const { data: invoice, error: invoiceError } = await supabase
      .from('invoices')
      .select('*')
      .eq('id', invoice_id)
      .single()

    if (invoiceError || !invoice) {
      return new Response(
        JSON.stringify({ error: 'Invoice not found' }),
        { 
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      )
    }

    // Create or get customer
    let customer_id: string | undefined

    // Try to find existing customer by email
    const customers = await stripe.customers.list({
      email: customer_email,
      limit: 1
    })

    if (customers.data.length > 0) {
      customer_id = customers.data[0].id
    } else {
      // Create new customer
      const customer = await stripe.customers.create({
        email: customer_email,
        name: customer_name || customer_email,
        metadata: {
          invoice_id: invoice_id,
          created_from: 'barnboss_invoice'
        }
      })
      customer_id = customer.id
    }

    // Prepare line items for Stripe
    let stripeLineItems

    if (line_items && Array.isArray(line_items)) {
      // Use provided line items
      stripeLineItems = line_items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          unit_amount: Math.round(item.rate * 100), // Convert to cents
          product_data: {
            name: item.description,
          },
        },
        quantity: item.quantity || 1,
      }))
    } else {
      // Create single line item from total amount
      stripeLineItems = [{
        price_data: {
          currency: 'usd',
          unit_amount: Math.round(amount * 100), // Convert to cents
          product_data: {
            name: description,
          },
        },
        quantity: 1,
      }]
    }

    // Create payment link
    const paymentLink = await stripe.paymentLinks.create({
      line_items: stripeLineItems,
      metadata: {
        invoice_id: invoice_id,
        customer_email: customer_email,
        ...metadata
      },
      after_completion: {
        type: 'redirect',
        redirect: {
          url: `${new URL(req.url).origin}/invoice-paid?invoice_id=${invoice_id}`
        }
      },
      payment_method_types: ['card', 'us_bank_account'],
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      phone_number_collection: {
        enabled: true,
      },
      custom_fields: [
        {
          key: 'invoice_reference',
          label: {
            type: 'string',
            custom: `Invoice ${invoice.invoice_number}`,
          },
          type: 'text',
          optional: true,
        },
      ],
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: description,
          metadata: {
            invoice_id: invoice_id,
            barnboss_invoice_number: invoice.invoice_number,
          },
          footer: 'Thank you for your business!',
        },
      },
    })

    // Update invoice with payment link information
    const { error: updateError } = await supabase
      .from('invoices')
      .update({
        payment_link_url: paymentLink.url,
        stripe_session_id: paymentLink.id,
        stripe_customer_id: customer_id,
        stripe_status: 'open',
        updated_at: new Date().toISOString()
      })
      .eq('id', invoice_id)

    if (updateError) {
      console.error('Failed to update invoice with payment link:', updateError)
      // Don't fail the request, just log the error
    }

    return new Response(
      JSON.stringify({ 
        id: paymentLink.id,
        url: paymentLink.url,
        customer_id: customer_id
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    )

  } catch (error) {
    console.error('Error creating payment link:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    )
  }
}) 