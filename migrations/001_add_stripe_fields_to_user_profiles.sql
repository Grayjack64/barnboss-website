-- Migration: Add Stripe integration fields to user_account_profiles
-- Description: Add Stripe customer and Connect account fields for payment processing
-- Date: Generated for manual execution

-- Add Stripe fields to user_account_profiles table
ALTER TABLE user_account_profiles
ADD COLUMN stripe_customer_id VARCHAR(255),
ADD COLUMN stripe_connect_account_id VARCHAR(255),
ADD COLUMN stripe_onboarding_completed BOOLEAN DEFAULT FALSE,
ADD COLUMN stripe_charges_enabled BOOLEAN DEFAULT FALSE,
ADD COLUMN stripe_payouts_enabled BOOLEAN DEFAULT FALSE;

-- Create indexes for performance
CREATE INDEX idx_user_account_profiles_stripe_customer 
ON user_account_profiles(stripe_customer_id);

CREATE INDEX idx_user_account_profiles_stripe_connect 
ON user_account_profiles(stripe_connect_account_id);

-- Add comments for documentation
COMMENT ON COLUMN user_account_profiles.stripe_customer_id IS 'Stripe Customer ID for subscription payments';
COMMENT ON COLUMN user_account_profiles.stripe_connect_account_id IS 'Stripe Connect Account ID for Pro users receiving payments';
COMMENT ON COLUMN user_account_profiles.stripe_onboarding_completed IS 'Whether Stripe Connect onboarding is completed for Pro users';
COMMENT ON COLUMN user_account_profiles.stripe_charges_enabled IS 'Whether the Connect account can accept charges';
COMMENT ON COLUMN user_account_profiles.stripe_payouts_enabled IS 'Whether the Connect account can receive payouts'; 