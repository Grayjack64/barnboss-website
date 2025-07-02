// STRIPE JAVASCRIPT DISABLED - Using Payment Links instead
// Since we switched to Stripe Payment Links for static site deployment,
// we don't need any client-side Stripe JavaScript anymore.

// Validate environment variables
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

if (!stripePublishableKey) {
  console.warn('⚠️ VITE_STRIPE_PUBLISHABLE_KEY is not set. Stripe functionality will be disabled.')
}

// Disabled Stripe JavaScript loading (Payment Links don't need it)
export const stripePromise = Promise.resolve(null)

// Export a utility to check if Stripe is available (now just checks env var)
export const isStripeAvailable = (): boolean => {
  return !!stripePublishableKey
}

// Stripe configuration (simplified)
export const stripeConfig = {
  publishableKey: stripePublishableKey,
  apiVersion: '2024-06-20' as const,
}

// Export types for TypeScript
export type StripeInstance = null 