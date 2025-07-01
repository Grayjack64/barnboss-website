# BarnBoss Webhook Deployment Guide

## 🎯 Overview

This guide walks you through deploying Stripe webhooks and Edge Functions for BarnBoss.

## 📋 Prerequisites

1. ✅ Supabase CLI installed
2. ✅ Stripe account with API keys
3. ✅ Database migrations executed
4. ✅ Environment variables configured

## 🚀 Step 1: Install Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-id
```

## 🔧 Step 2: Configure Environment Secrets

Set your Stripe credentials as Supabase secrets:

```bash
# Set Stripe secret key (replace with your actual secret key)
supabase secrets set STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here

# Set webhook secret (you'll get this after creating the webhook)
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Set Supabase service role key
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## 📦 Step 3: Deploy Edge Functions

Deploy all three Edge Functions:

```bash
# Deploy webhook handler
supabase functions deploy stripe-webhook

# Deploy checkout session creator
supabase functions deploy create-checkout-session

# Deploy payment link creator
supabase functions deploy create-payment-link
```

## 🔗 Step 4: Get Function URLs

After deployment, get your function URLs:

```bash
# List all functions
supabase functions list
```

Your webhook URL will be:
```
https://your-project-id.supabase.co/functions/v1/stripe-webhook
```

## ⚙️ Step 5: Configure Stripe Webhook

### In Stripe Dashboard:

1. **Go to Developers → Webhooks**
2. **Click "Add endpoint"**
3. **Enter your webhook URL:**
   ```
   https://your-project-id.supabase.co/functions/v1/stripe-webhook
   ```

4. **Select these events:**
   ```
   ✅ account.updated
   ✅ checkout.session.completed
   ✅ checkout.session.async_payment_succeeded
   ✅ checkout.session.async_payment_failed
   ✅ customer.subscription.created
   ✅ customer.subscription.updated
   ✅ customer.subscription.deleted
   ✅ invoice.payment_succeeded
   ✅ invoice.payment_failed
   ✅ payment_intent.succeeded
   ✅ payment_intent.payment_failed
   ```

5. **Click "Add endpoint"**

6. **Copy the "Signing secret"** (starts with `whsec_`)

7. **Update your webhook secret:**
   ```bash
   supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_your_actual_secret_here
   ```

## 🔄 Step 6: Update Frontend API Calls

Update your frontend to use the deployed functions:

### In `src/components/subscription/SubscriptionPlans.tsx`:

Replace the fetch URL:
```typescript
// OLD
const response = await fetch('/api/create-checkout-session', {

// NEW  
const response = await fetch('https://your-project-id.supabase.co/functions/v1/create-checkout-session', {
```

### In `src/components/billing/InvoiceCreator.tsx`:

Replace the fetch URL:
```typescript
// OLD
const paymentResponse = await fetch('/api/create-payment-link', {

// NEW
const paymentResponse = await fetch('https://your-project-id.supabase.co/functions/v1/create-payment-link', {
```

## 🧪 Step 7: Test the Integration

### Test Webhook Reception:

1. **Create a test event in Stripe Dashboard**
2. **Check Supabase function logs:**
   ```bash
   supabase functions logs stripe-webhook
   ```

3. **Verify database updates:**
   - Check `stripe_webhook_events` table
   - Verify event was marked as `processed: true`

### Test Subscription Flow:

1. **Go to your pricing page**
2. **Select a paid plan**
3. **Complete checkout with test card: `4242424242424242`**
4. **Verify subscription created in database**

### Test Invoice Payment:

1. **Create an invoice as Pro user**
2. **Generate payment link**
3. **Test payment with test card**
4. **Verify payment recorded in database**

## 🛠️ Step 8: Create Products in Stripe

Create your subscription products with correct pricing:

```bash
# Personal Plus - $9.99/month
stripe products create \
  --name="Personal Plus" \
  --description="Advanced horse management features"

stripe prices create \
  --product=prod_personal_plus_id \
  --unit-amount=999 \
  --currency=usd \
  --recurring[interval]=month

# Premium (Ranch) - $49.99/month  
stripe products create \
  --name="Premium (Ranch)" \
  --description="Complete ranch management solution"

stripe prices create \
  --product=prod_premium_id \
  --unit-amount=4999 \
  --currency=usd \
  --recurring[interval]=month

# Pro - $249/month
stripe products create \
  --name="Pro" \
  --description="Full marketplace capabilities"

stripe prices create \
  --product=prod_pro_id \
  --unit-amount=24900 \
  --currency=usd \
  --recurring[interval]=month
```

## 🔧 Step 9: Update Price IDs

Update the price IDs in your `SubscriptionPlans.tsx` component:

```typescript
const plans: Record<SubscriptionPlan, PlanDetails> = {
  personal_plus: {
    stripe_price_id: 'price_actual_personal_plus_id' // Replace with actual ID
  },
  premium: {
    stripe_price_id: 'price_actual_premium_id' // Replace with actual ID  
  },
  pro: {
    stripe_price_id: 'price_actual_pro_id' // Replace with actual ID
  }
}
```

## 📊 Step 10: Monitor and Debug

### Function Logs:
```bash
# View webhook logs
supabase functions logs stripe-webhook --follow

# View checkout session logs  
supabase functions logs create-checkout-session --follow

# View payment link logs
supabase functions logs create-payment-link --follow
```

### Database Monitoring:
```sql
-- Check webhook events
SELECT * FROM stripe_webhook_events ORDER BY created_at DESC LIMIT 10;

-- Check subscription status
SELECT * FROM stripe_subscriptions ORDER BY created_at DESC LIMIT 10;

-- Check payment history
SELECT * FROM payment_history ORDER BY created_at DESC LIMIT 10;
```

### Stripe Dashboard:
- Monitor webhook deliveries
- Check event logs
- Verify payment processing

## ✅ Deployment Checklist

- [ ] Supabase CLI installed and linked
- [ ] Environment secrets configured
- [ ] All 3 Edge Functions deployed
- [ ] Webhook endpoint created in Stripe
- [ ] Webhook secret updated
- [ ] Frontend API URLs updated
- [ ] Subscription products created
- [ ] Price IDs updated in code
- [ ] Test payments completed
- [ ] Database tables populated
- [ ] Monitoring setup verified

## 🚨 Troubleshooting

### Common Issues:

1. **Webhook signature verification fails**
   - Check webhook secret is correct
   - Verify function is receiving raw body

2. **Function deployment fails**
   - Check Supabase CLI is latest version
   - Verify project linking

3. **Database updates not working**
   - Check migrations were executed
   - Verify service role key permissions

4. **Payment flows fail**
   - Check Stripe API keys are correct
   - Verify environment secrets

### Support:
- Supabase Discord: https://discord.supabase.com
- Stripe Support: https://support.stripe.com

---

*🎉 Once completed, your BarnBoss Stripe integration will be fully operational!* 