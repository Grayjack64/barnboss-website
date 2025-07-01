# Database Migrations for Stripe Integration

## Overview
These migrations add Stripe integration fields to the BarnBoss database for:
- Subscription management
- Pro user marketplace functionality  
- Payment tracking and history

## Execution Order
Run these migrations in the following order in your Supabase SQL editor:

1. `001_add_stripe_fields_to_user_profiles.sql` - Adds Stripe customer/connect fields to user profiles
2. `002_add_stripe_fields_to_organizations.sql` - Adds organization Stripe Connect fields  
3. `003_enhance_invoices_with_stripe.sql` - Enhances existing invoices with Stripe payment tracking
4. `004_create_stripe_subscriptions_and_webhooks.sql` - Creates new tables for subscriptions and webhook logging

## Important Notes
- These migrations are designed to work with the existing BarnBoss database schema
- No existing data will be lost - only new fields and tables are added
- All new fields are nullable to maintain compatibility
- Indexes are created for optimal query performance

## Testing
After running migrations, verify:
- All tables have new fields added correctly
- Indexes are created successfully  
- No existing functionality is broken
- Application can read/write to new fields

For questions or issues, contact the development team. 