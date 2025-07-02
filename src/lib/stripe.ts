import { loadStripe, Stripe } from '@stripe/stripe-js'

// Validate environment variables
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

if (!stripePublishableKey) {
  console.warn('⚠️ VITE_STRIPE_PUBLISHABLE_KEY is not set. Stripe functionality will be disabled.')
}

// Only load Stripe if we have a publishable key
export const stripePromise = stripePublishableKey 
  ? loadStripe(stripePublishableKey)
  : Promise.resolve(null)

// Export a utility to check if Stripe is available
export const isStripeAvailable = (): boolean => {
  return !!stripePublishableKey
}

// Stripe configuration
export const stripeConfig = {
  publishableKey: stripePublishableKey,
  apiVersion: '2024-06-20' as const,
}

// Export types for TypeScript
export type StripeInstance = Stripe | null 