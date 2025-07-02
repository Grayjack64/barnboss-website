-- Migration: Add stripe_customer_id to organizations table
-- Description: Add missing Stripe customer ID field for subscription management
-- Date: Generated for manual execution
-- Required for: Subscription plan functionality

-- Add stripe_customer_id column to organizations table
DO $$ 
BEGIN 
    -- Add stripe_customer_id if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name='organizations' AND column_name='stripe_customer_id'
    ) THEN
        ALTER TABLE organizations 
        ADD COLUMN stripe_customer_id VARCHAR(255);
        
        CREATE INDEX IF NOT EXISTS idx_organizations_stripe_customer 
        ON organizations(stripe_customer_id);
        
        -- Add comment for documentation
        COMMENT ON COLUMN organizations.stripe_customer_id IS 'Stripe Customer ID for organization subscription payments';
    END IF;
END $$;

-- Verify the change
SELECT 'Migration completed. Checking results...' as status;

SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'organizations' 
  AND column_name = 'stripe_customer_id'; 