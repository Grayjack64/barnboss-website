# BarnBoss Stripe Integration Setup Guide

## 🎯 Overview

This guide covers the complete setup of Stripe integration for BarnBoss, including subscription management and Pro user marketplace functionality.

---

## 📋 Prerequisites

### 1. Environment Variables Setup

Create a `.env` file in your project root with the following variables:

```bash
# Supabase Configuration (existing)
VITE_SUPABASE_URL=https://hjqxajipxbbnggrscpcq.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Server-side Stripe key (for Supabase Edge Functions - NOT exposed to frontend)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
```

**Note**: Replace the placeholder keys with your actual Stripe API keys from your dashboard.

---

## 🗄️ Database Setup

Execute the following migrations in order in your Supabase SQL editor:

### Migration 1: User Profile Stripe Fields
```sql
-- File: migrations/001_add_stripe_fields_to_user_profiles.sql
-- Execute in Supabase SQL Editor
```

### Migration 2: Organization Stripe Fields  
```sql
-- File: migrations/002_add_stripe_fields_to_organizations.sql
-- Execute in Supabase SQL Editor
```

### Migration 3: Invoice Stripe Enhancement
```sql
-- File: migrations/003_enhance_invoices_with_stripe.sql
-- Execute in Supabase SQL Editor
```

### Migration 4: Subscription & Payment Tables
```sql
-- File: migrations/004_create_stripe_subscriptions_and_webhooks.sql
-- Execute in Supabase SQL Editor
```

---

## 🔧 Stripe Dashboard Setup

### 1. Create Subscription Products

In your Stripe Dashboard, create these products:

#### Personal Plus Plan
- **Product Name**: "BarnBoss Personal Plus"
- **Pricing**: $19.99/month recurring
- **Price ID**: Copy this ID and update in `src/components/subscription/SubscriptionPlans.tsx`

#### Pro Plan
- **Product Name**: "BarnBoss Pro"
- **Pricing**: $49.99/month recurring
- **Price ID**: Copy this ID and update in `src/components/subscription/SubscriptionPlans.tsx`

### 2. Enable Stripe Connect

1. Go to **Connect** in your Stripe Dashboard
2. Enable **Express accounts** for your platform
3. Configure your platform settings:
   - **Platform name**: "BarnBoss"
   - **Support email**: Your support email
   - **Platform website**: Your website URL

### 3. Configure Webhooks

Set up webhooks to handle Stripe events:

**Webhook URL**: `https://your-domain.com/api/webhooks/stripe`

**Events to listen for**:
- `checkout.session.completed`
- `payment_intent.succeeded`
- `payment_intent.payment_failed`
- `invoice.payment_succeeded`
- `invoice.payment_failed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `account.updated` (for Connect accounts)

---

## 🚀 Implementation Summary

### ✅ Components Created
- **SubscriptionPlans**: Beautiful plan selection UI with Stripe Checkout integration
- **InvoiceCreator**: Complete invoice creation for Pro users with payment link generation
- **Stripe Client**: Frontend Stripe.js configuration and utilities

### ✅ Database Schema
- **4 Migration Files**: Complete database schema updates for Stripe integration
- **Payment Tracking**: Comprehensive payment history and status tracking
- **Webhook Logging**: Event logging for reliable payment processing

### ✅ TypeScript Integration
- **Enhanced Types**: Complete type definitions for all Stripe entities
- **Type Safety**: Full TypeScript support for payment processing

---

## 📊 Features Overview

### Subscription Management
- Three-tier plans (Personal Free, Personal Plus $19.99, Pro $49.99)
- Automatic Stripe customer creation
- Subscription status tracking and management
- Trial period support

### Pro User Marketplace
- Invoice creation with line items
- Stripe payment link generation
- Multiple payment methods (Card, ACH)
- Payment status tracking
- Customer notifications

### Payment Processing
- Secure Stripe Checkout integration
- Webhook event handling
- Payment history tracking
- Fee calculation and reporting

---

## 🔄 Next Steps

1. **Execute Database Migrations**: Run all 4 migration files in Supabase
2. **Set Environment Variables**: Add your actual Stripe API keys to `.env`
3. **Configure Stripe Dashboard**: Set up products, Connect, and webhooks
4. **Deploy Edge Functions**: Create Supabase Edge Functions for server-side operations
5. **Test Integration**: Use Stripe test mode to verify all functionality

---

## 📞 Support

For questions or issues:
- Review Stripe documentation: https://stripe.com/docs
- Check Supabase Edge Functions: https://supabase.com/docs/guides/functions
- Contact development team for BarnBoss-specific implementation

---

*Implementation completed with full Stripe Connect marketplace functionality* 