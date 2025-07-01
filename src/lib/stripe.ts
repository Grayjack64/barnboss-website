import { loadStripe, Stripe } from '@stripe/stripe-js'

const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

if (!stripePublishableKey) {
  throw new Error('Missing Stripe publishable key')
}

// Initialize Stripe
export const stripePromise = loadStripe(stripePublishableKey)

// Stripe configuration
export const stripeConfig = {
  publishableKey: stripePublishableKey,
  apiVersion: '2024-06-20' as const,
}

// Export types for TypeScript
export type StripeInstance = Stripe | null 