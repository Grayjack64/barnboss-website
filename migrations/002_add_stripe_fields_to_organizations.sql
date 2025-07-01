-- Migration: Add Stripe integration fields to organizations
-- Description: Add Stripe Connect account fields for organizational billing
-- Date: Generated for manual execution

-- Add Stripe fields to organizations table
ALTER TABLE organizations
ADD COLUMN stripe_connect_account_id VARCHAR(255),
ADD COLUMN stripe_onboarding_completed BOOLEAN DEFAULT FALSE,
ADD COLUMN stripe_charges_enabled BOOLEAN DEFAULT FALSE,
ADD COLUMN stripe_payouts_enabled BOOLEAN DEFAULT FALSE,
ADD COLUMN stripe_default_payment_method VARCHAR(255);

-- Create indexes for performance
CREATE INDEX idx_organizations_stripe_connect 
ON organizations(stripe_connect_account_id);

-- Add comments for documentation
COMMENT ON COLUMN organizations.stripe_connect_account_id IS 'Stripe Connect Account ID for organization payments';
COMMENT ON COLUMN organizations.stripe_onboarding_completed IS 'Whether Stripe Connect onboarding is completed';
COMMENT ON COLUMN organizations.stripe_charges_enabled IS 'Whether the organization can accept charges';
COMMENT ON COLUMN organizations.stripe_payouts_enabled IS 'Whether the organization can receive payouts';
COMMENT ON COLUMN organizations.stripe_default_payment_method IS 'Default Stripe payment method for subscriptions'; 