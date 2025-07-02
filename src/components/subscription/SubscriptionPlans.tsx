import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Check, Crown, Star, Zap, Trophy } from 'lucide-react'
import { PlanDetails, SubscriptionPlan } from '../../lib/types'
import { stripePromise, isStripeAvailable } from '../../lib/stripe'
import { supabase } from '../../lib/supabase'

const plans: Record<SubscriptionPlan, PlanDetails> = {
  personal: {
    name: 'Personal',
    price: 0,
    interval: 'month',
    features: [
      'Basic horse management',
      'Personal horse records',
      'Mobile app access',
      'Email support',
      'Up to 5 horses'
    ],
    stripe_price_id: '' // Free plan - no Stripe price ID needed
  },
  personal_plus: {
    name: 'Personal Plus',
    price: 9.99,
    interval: 'month',
    features: [
      'Everything in Personal',
      'Advanced horse analytics',
      'Health tracking & reminders',
      'Document storage',
      'Priority support',
      'Up to 25 horses',
      'Training session tracking'
    ],
    stripe_price_id: 'price_personal_plus_monthly' // Replace with actual Stripe price ID
  },
  premium: {
    name: 'Premium (Ranch)',
    price: 49.99,
    interval: 'month',
    features: [
      'Everything in Personal Plus',
      'Multi-horse management',
      'Breeding records & pedigree',
      'Competition tracking',
      'Financial tracking',
      'Unlimited horses',
      'Advanced reporting',
      'Team collaboration'
    ],
    stripe_price_id: 'price_premium_monthly' // Replace with actual Stripe price ID
  },
  pro: {
    name: 'Pro',
    price: 249,
    interval: 'month',
    features: [
      'Everything in Premium',
      'Client management system',
      'Invoice generation & payments',
      'Stripe Connect marketplace',
      'Multi-organization support',
      'Custom branding',
      'API access',
      'White-label options',
      'Dedicated account manager'
    ],
    stripe_price_id: 'price_pro_monthly' // Replace with actual Stripe price ID
  }
}

interface SubscriptionPlansProps {
  currentPlan?: SubscriptionPlan | null
  onSelectPlan?: (plan: SubscriptionPlan) => void
  userId?: string
  organizationId?: string
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({
  currentPlan,
  onSelectPlan,
  userId,
  organizationId
}) => {
  const [loading, setLoading] = useState<string | null>(null)

  const handleSelectPlan = async (planType: SubscriptionPlan) => {
    if (!userId || !organizationId) {
      alert('Please log in to subscribe')
      return
    }

    if (planType === 'personal') {
      // Free plan - handle locally
      onSelectPlan?.(planType)
      return
    }

    // Check if Stripe is available
    if (!isStripeAvailable()) {
      alert('Payment processing is temporarily unavailable. Please try again later.')
      return
    }

    setLoading(planType)

    try {
      const stripe = await stripePromise
      if (!stripe) {
        throw new Error('Failed to load Stripe')
      }

      // Get user session for customer info
      const { data: { session: userSession }, error: sessionError } = await supabase.auth.getSession()
      
      if (sessionError || !userSession) {
        alert('Authentication required - please log in again')
        setLoading(null)
        return
      }

      const plan = plans[planType]
      
      // Get or create Stripe customer ID first
      let customerId = await getOrCreateStripeCustomer(userSession.user, organizationId)

      // Use Stripe's client-side checkout session creation
      const { error } = await stripe.redirectToCheckout({
        mode: 'subscription',
        lineItems: [{
          price: plan.stripe_price_id,
          quantity: 1,
        }],
        customerEmail: userSession.user.email,
        successUrl: `${window.location.origin}/account-settings?success=true&plan=${planType}&session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/account-settings?canceled=true`,
      })

      if (error) {
        throw new Error(typeof error.message === 'string' ? error.message : 'Payment failed')
      }
      
    } catch (error) {
      console.error('Subscription error:', error)
      const message = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Failed to start subscription: ${message}`)
    } finally {
      setLoading(null)
    }
  }

  // Helper function to get or create Stripe customer
  const getOrCreateStripeCustomer = async (user: any, orgId: string) => {
    try {
      // Check if organization already has a Stripe customer ID
      const { data: org } = await supabase
        .from('organizations')
        .select('stripe_customer_id')
        .eq('id', orgId)
        .single()

      if (org?.stripe_customer_id) {
        return org.stripe_customer_id
      }

      // Note: In a production app, you'd create the customer via a server-side function
      // For now, we'll let Stripe create the customer during checkout
      return null
    } catch (error) {
      console.error('Error getting customer:', error)
      return null
    }
  }

  const getPlanIcon = (planType: SubscriptionPlan) => {
    switch (planType) {
      case 'personal': return <Star className="h-8 w-8" />
      case 'personal_plus': return <Zap className="h-8 w-8" />
      case 'premium': return <Trophy className="h-8 w-8" />
      case 'pro': return <Crown className="h-8 w-8" />
    }
  }

  const getPlanColor = (planType: SubscriptionPlan) => {
    switch (planType) {
      case 'personal': return 'text-blue-600 border-blue-200'
      case 'personal_plus': return 'text-purple-600 border-purple-200'
      case 'premium': return 'text-green-600 border-green-200'
      case 'pro': return 'text-amber-600 border-amber-200'
    }
  }

  const getButtonColor = (planType: SubscriptionPlan) => {
    switch (planType) {
      case 'personal': return 'bg-blue-600 hover:bg-blue-700'
      case 'personal_plus': return 'bg-purple-600 hover:bg-purple-700'
      case 'premium': return 'bg-green-600 hover:bg-green-700'
      case 'pro': return 'bg-amber-600 hover:bg-amber-700'
    }
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Select the plan that best fits your horse management needs
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4">
          {(Object.keys(plans) as SubscriptionPlan[]).map((planType) => {
            const plan = plans[planType]
            const isCurrentPlan = currentPlan === planType
            const isMostPopular = planType === 'premium'
            const isBestValue = planType === 'pro'

            return (
              <div
                key={planType}
                className={`relative rounded-2xl border-2 p-8 shadow-lg ${getPlanColor(planType)} ${
                  isCurrentPlan ? 'ring-4 ring-green-400' : ''
                } ${isBestValue ? 'transform scale-105' : ''}`}
              >
                {isMostPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {isBestValue && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </span>
                  </div>
                )}

                {isCurrentPlan && (
                  <div className="absolute -top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Current Plan
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <div className={`inline-flex ${getPlanColor(planType).split(' ')[0]}`}>
                    {getPlanIcon(planType)}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="mt-2">
                    {plan.price === 0 ? (
                      <span className="text-4xl font-bold text-gray-900">Free</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-gray-900">
                          ${plan.price}
                        </span>
                        <span className="text-lg text-gray-600">/{plan.interval}</span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {isCurrentPlan ? (
                    <button
                      disabled
                      className="w-full py-3 px-4 bg-gray-100 text-gray-500 rounded-lg font-medium cursor-not-allowed"
                    >
                      Current Plan
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSelectPlan(planType)}
                      disabled={loading === planType}
                      className={`w-full py-3 px-4 text-white rounded-lg font-medium transition-colors ${getButtonColor(planType)} disabled:opacity-50`}
                    >
                      {loading === planType ? 'Processing...' : 
                       plan.price === 0 ? 'Get Started Free' : 'Subscribe Now'}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center text-sm text-gray-600">
          <p>All paid plans include a 14-day free trial. Cancel anytime.</p>
          <p className="mt-2">Need enterprise features? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> for custom pricing</p>
        </div>
      </div>
    </div>
  )
} 