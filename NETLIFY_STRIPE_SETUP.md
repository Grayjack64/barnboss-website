# Netlify + Stripe Subscription Setup Guide

## Overview
This guide walks you through setting up Stripe subscriptions for BarnBoss on Netlify using client-side integration.

## Step 1: Create Stripe Products & Prices

1. **Login to Stripe Dashboard**: https://dashboard.stripe.com
2. **Go to Products**: Navigate to Products in the left sidebar
3. **Create Products**: Create the following products:

### Personal Plus Product
- **Name**: BarnBoss Personal Plus
- **Description**: Enhanced horse management with advanced features
- **Pricing**: 
  - Type: Recurring
  - Amount: $9.99
  - Billing Period: Monthly
  - Copy the **Price ID** (starts with `price_`)

### Premium Product  
- **Name**: BarnBoss Premium (Ranch)
- **Description**: Complete ranch management solution
- **Pricing**:
  - Type: Recurring
  - Amount: $49.99
  - Billing Period: Monthly
  - Copy the **Price ID** (starts with `price_`)

### Pro Product
- **Name**: BarnBoss Pro
- **Description**: Full marketplace and payment collection features
- **Pricing**:
  - Type: Recurring
  - Amount: $249.00
  - Billing Period: Monthly
  - Copy the **Price ID** (starts with `price_`)

## Step 2: Update Environment Variables

Add to your `.env` file:

```bash
# Existing variables
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

## Step 3: Update Netlify Environment Variables

1. **Go to Netlify Dashboard**: https://app.netlify.com
2. **Select your site**
3. **Go to Site settings > Environment variables**
4. **Add the same environment variables**:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY` 
   - `VITE_STRIPE_PUBLISHABLE_KEY`

## Step 4: Update Price IDs in Code

Edit `src/components/subscription/SubscriptionPlans.tsx` and replace the placeholder price IDs:

```typescript
const plans: Record<SubscriptionPlan, PlanDetails> = {
  personal_plus: {
    // ... other fields
    stripe_price_id: 'price_YOUR_PERSONAL_PLUS_PRICE_ID_HERE'
  },
  premium: {
    // ... other fields  
    stripe_price_id: 'price_YOUR_PREMIUM_PRICE_ID_HERE'
  },
  pro: {
    // ... other fields
    stripe_price_id: 'price_YOUR_PRO_PRICE_ID_HERE'
  }
}
```

## Step 5: Test the Integration

1. **Deploy to Netlify**: Push your changes to trigger a deployment
2. **Test in development mode**: Use Stripe test mode and test cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
3. **Test subscription flow**:
   - Navigate to account settings
   - Try upgrading to each plan
   - Verify redirects work correctly

## Step 6: Handle Webhooks (Optional but Recommended)

For production, you'll want to handle Stripe webhooks to update subscription status:

1. **Create Netlify Function** (optional):
   - Create `netlify/functions/stripe-webhook.js`
   - Handle subscription events

2. **Or use Supabase Database Functions**:
   - Update user subscription status via SQL triggers

## Step 7: Go Live

1. **Switch to live mode** in Stripe Dashboard
2. **Update environment variables** with live keys:
   - `pk_live_...` for publishable key
   - Live price IDs from live mode
3. **Test with real payment method**
4. **Monitor transactions** in Stripe Dashboard

## Architecture Benefits

✅ **No server required** - Works perfectly with Netlify static hosting
✅ **PCI compliant** - Stripe handles all payment data
✅ **Real-time** - Immediate redirect to Stripe Checkout
✅ **Secure** - No sensitive data in frontend code
✅ **Scalable** - Handles any number of subscribers

## Success URLs

The system will redirect users to:
- **Success**: `/account-settings?success=true&plan={plan_name}&session_id={session_id}`
- **Cancel**: `/account-settings?canceled=true`

You can use these URL parameters to show success/error messages.

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify environment variables are set
3. Ensure Stripe is in test mode for development
4. Check Stripe Dashboard for failed payments

## Next Steps

After basic subscriptions work:
1. Add webhook handling for subscription lifecycle events
2. Implement subscription cancellation
3. Add usage-based billing features
4. Set up customer portal for self-service 