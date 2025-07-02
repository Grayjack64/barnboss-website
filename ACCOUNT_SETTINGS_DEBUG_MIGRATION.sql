-- Account Settings Debug Migration
-- Run this script ONLY if you're experiencing loading issues with account settings

-- First, let's check what data exists
-- Uncomment these lines to run diagnostics:

-- SELECT 'Checking user_account_profiles table...' as diagnostic;
-- SELECT count(*) as total_profiles, 
--        count(CASE WHEN stripe_customer_id IS NOT NULL THEN 1 END) as with_stripe_customer,
--        count(CASE WHEN stripe_connect_account_id IS NOT NULL THEN 1 END) as with_stripe_connect
-- FROM user_account_profiles;

-- SELECT 'Checking organizations table...' as diagnostic;
-- SELECT count(*) as total_orgs,
--        count(CASE WHEN stripe_connect_account_id IS NOT NULL THEN 1 END) as with_stripe_connect,
--        subscription_tier,
--        count(*) as count_per_tier
-- FROM organizations 
-- GROUP BY subscription_tier;

-- Only add these columns if they don't exist:
-- (Check first by running: \d user_account_profiles to see existing columns)

-- For user_account_profiles table:
DO $$ 
BEGIN 
    -- Add stripe_customer_id if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name='user_account_profiles' AND column_name='stripe_customer_id'
    ) THEN
        ALTER TABLE user_account_profiles 
        ADD COLUMN stripe_customer_id VARCHAR(255);
        
        CREATE INDEX IF NOT EXISTS idx_user_profiles_stripe_customer 
        ON user_account_profiles(stripe_customer_id);
    END IF;

    -- Add stripe_connect_account_id if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name='user_account_profiles' AND column_name='stripe_connect_account_id'
    ) THEN
        ALTER TABLE user_account_profiles 
        ADD COLUMN stripe_connect_account_id VARCHAR(255);
        
        CREATE INDEX IF NOT EXISTS idx_user_profiles_stripe_connect 
        ON user_account_profiles(stripe_connect_account_id);
    END IF;

    -- Add onboarding status if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name='user_account_profiles' AND column_name='stripe_onboarding_completed'
    ) THEN
        ALTER TABLE user_account_profiles 
        ADD COLUMN stripe_onboarding_completed BOOLEAN DEFAULT FALSE;
    END IF;
END $$;

-- For organizations table:
DO $$ 
BEGIN 
    -- Add stripe_connect_account_id if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name='organizations' AND column_name='stripe_connect_account_id'
    ) THEN
        ALTER TABLE organizations 
        ADD COLUMN stripe_connect_account_id VARCHAR(255);
        
        CREATE INDEX IF NOT EXISTS idx_organizations_stripe_connect 
        ON organizations(stripe_connect_account_id);
    END IF;

    -- Add onboarding status fields if they don't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name='organizations' AND column_name='stripe_onboarding_completed'
    ) THEN
        ALTER TABLE organizations 
        ADD COLUMN stripe_onboarding_completed BOOLEAN DEFAULT FALSE,
        ADD COLUMN stripe_charges_enabled BOOLEAN DEFAULT FALSE,
        ADD COLUMN stripe_payouts_enabled BOOLEAN DEFAULT FALSE;
    END IF;
END $$;

-- Verify the changes
SELECT 'Migration completed. Checking results...' as status;

SELECT 'user_account_profiles columns:' as table_info;
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'user_account_profiles' 
  AND column_name LIKE '%stripe%'
ORDER BY column_name;

SELECT 'organizations columns:' as table_info;
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'organizations' 
  AND column_name LIKE '%stripe%'
ORDER BY column_name; 