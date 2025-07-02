# Stripe Payment Links Setup for Netlify Static Site

## Overview
Since BarnBoss is deployed as a **static site on Netlify**, we're using **Stripe Payment Links** instead of server-side checkout sessions. This approach is perfect for static sites and requires zero server code.

---

## 🎯 **What Are Payment Links?**

Payment Links are **pre-created hosted checkout pages** by Stripe:
- ✅ **Zero server code required** - Perfect for static sites
- ✅ **Hosted by Stripe** - PCI compliant automatically  
- ✅ **Custom branding** - Uses your Stripe account branding
- ✅ **Automatic receipts** - Stripe handles email confirmations
- ✅ **Webhook integration** - Notifies your system when payments complete

---

## 🛠️ **Setup Instructions**

### **Step 1: Create Payment Links in Stripe Dashboard**

1. **Go to** [Stripe Dashboard](https://dashboard.stripe.com) → **Payment Links**

2. **Click "Create payment link"** for each subscription plan:

#### **Personal Plus Plan ($9.99/month)**
- **Product**: Personal Plus (prod_SbeNcpEY7VNK1h)
- **Pricing**: Recurring - $9.99/month
- **Payment collection**: Automatic recurring payments
- **Success URL**: `https://mybarnboss.com/account-settings?success=true&plan=personal_plus`
- **Cancel URL**: `https://mybarnboss.com/account-settings?canceled=true`

#### **Premium (Ranch) Plan ($49.99/month)**  
- **Product**: Ranch (prod_SavhD6GvP8LKmD)
- **Pricing**: Recurring - $49.99/month
- **Payment collection**: Automatic recurring payments
- **Success URL**: `https://mybarnboss.com/account-settings?success=true&plan=premium`
- **Cancel URL**: `https://mybarnboss.com/account-settings?canceled=true`

#### **Pro Plan ($249/month)**
- **Product**: Pro (prod_SavhqAPQZdoSOn)
- **Pricing**: Recurring - $249/month  
- **Payment collection**: Automatic recurring payments
- **Success URL**: `https://mybarnboss.com/account-settings?success=true&plan=pro`
- **Cancel URL**: `https://mybarnboss.com/account-settings?canceled=true`

### **Step 2: Copy Payment Link URLs**

After creating each payment link, copy the URLs. They'll look like:
```
https://buy.stripe.com/test_xxxxxxxxxxxxx
```

### **Step 3: Update Code with Payment Links**

Update `src/components/subscription/SubscriptionPlans.tsx`:

```typescript
const plans: Record<SubscriptionPlan, PlanDetails> = {
  // ... existing personal plan ...
  
  personal_plus: {
    // ... existing fields ...
    payment_link: 'https://buy.stripe.com/test_YOUR_PERSONAL_PLUS_LINK'
  },
  premium: {
    // ... existing fields ...
    payment_link: 'https://buy.stripe.com/test_YOUR_PREMIUM_LINK'
  },
  pro: {
    // ... existing fields ...
    payment_link: 'https://buy.stripe.com/test_YOUR_PRO_LINK'
  }
}
```

### **Step 4: Commit and Deploy**

```bash
git add .
git commit -m "feat: Add Stripe Payment Links for static site deployment"
git push origin main
```

Netlify will automatically deploy the updated site.

---

## 🧪 **Testing Your Payment Links**

### **Test Mode (Current Setup)**
- Use Stripe test payment links
- Test card: `4242424242424242`
- Any future expiry date and CVC

### **Production Deployment**
1. **Create live payment links** in Stripe Dashboard (live mode)
2. **Update code** with live payment link URLs
3. **Deploy to production**

---

## 🔄 **How the Flow Works**

1. **User clicks subscription button** → Redirects to Stripe Payment Link
2. **User completes payment** → Stripe processes subscription
3. **User returns to your site** → Success page with context
4. **Stripe sends webhook** → Your system updates subscription status
5. **User sees updated dashboard** → Subscription is active

---

## 🎨 **Customization Options**

### **Branding**
- Payment links use your **Stripe account branding**
- Upload logo in Stripe Dashboard → Settings → Branding

### **Customer Information**
- Payment links collect customer **email and billing address**
- **Tax collection** can be enabled if needed

### **Trial Periods**
- Add trial periods when creating payment links
- Common: 14-day free trial for paid plans

---

## 🔔 **Webhook Integration** (Future Enhancement)

For complete subscription management, set up webhooks:

1. **Stripe Dashboard** → Webhooks → Add endpoint
2. **Endpoint URL**: `https://YOUR_DOMAIN/api/webhooks/stripe`
3. **Events to listen for**:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

---

## ✅ **Benefits of This Approach**

- ✅ **No server required** - Perfect for Netlify static sites
- ✅ **PCI compliant** - Stripe handles all payment data
- ✅ **Instant setup** - No complex integration needed
- ✅ **Mobile optimized** - Stripe's checkout works perfectly on mobile
- ✅ **Multiple payment methods** - Cards, Apple Pay, Google Pay, etc.
- ✅ **Automatic receipts** - Stripe sends confirmation emails
- ✅ **Subscription management** - Customers can update/cancel subscriptions

---

## 🚀 **Ready to Go Live?**

Once you've tested thoroughly:

1. **Switch to live mode** in Stripe Dashboard
2. **Create live payment links** for each plan
3. **Update code** with live payment link URLs
4. **Deploy to production**
5. **Test with real payment methods**

**Your static Stripe integration is production-ready!** 🎉 