-- Migration: Create Stripe subscriptions and webhook event logging
-- Description: Add subscription tracking and webhook event logging tables
-- Date: Generated for manual execution

-- Create stripe_subscriptions table
CREATE TABLE stripe_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  stripe_subscription_id VARCHAR(255) NOT NULL UNIQUE,
  stripe_customer_id VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL, -- active, canceled, incomplete, past_due, etc.
  plan_type VARCHAR(50) NOT NULL, -- personal, personal_plus, premium, pro
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  canceled_at TIMESTAMP WITH TIME ZONE,
  trial_start TIMESTAMP WITH TIME ZONE,
  trial_end TIMESTAMP WITH TIME ZONE,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create stripe_webhook_events table for event logging
CREATE TABLE stripe_webhook_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  stripe_event_id VARCHAR(255) NOT NULL UNIQUE,
  event_type VARCHAR(100) NOT NULL,
  processed BOOLEAN DEFAULT FALSE,
  processing_attempts INTEGER DEFAULT 0,
  last_processing_error TEXT,
  payload JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed_at TIMESTAMP WITH TIME ZONE
);

-- Create payment_history table for tracking all payments
CREATE TABLE payment_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  organization_id UUID REFERENCES organizations(id),
  invoice_id UUID REFERENCES invoices(id),
  subscription_id UUID REFERENCES stripe_subscriptions(id),
  stripe_payment_intent_id VARCHAR(255),
  stripe_charge_id VARCHAR(255),
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status VARCHAR(50) NOT NULL, -- succeeded, failed, pending, etc.
  payment_method_type VARCHAR(50), -- card, ach_debit, etc.
  failure_reason TEXT,
  stripe_fee DECIMAL(10,2),
  net_amount DECIMAL(10,2),
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_stripe_subscriptions_user_id ON stripe_subscriptions(user_id);
CREATE INDEX idx_stripe_subscriptions_organization_id ON stripe_subscriptions(organization_id);
CREATE INDEX idx_stripe_subscriptions_stripe_id ON stripe_subscriptions(stripe_subscription_id);
CREATE INDEX idx_stripe_subscriptions_status ON stripe_subscriptions(status);
CREATE INDEX idx_stripe_subscriptions_plan_type ON stripe_subscriptions(plan_type);

CREATE INDEX idx_stripe_webhooks_event_id ON stripe_webhook_events(stripe_event_id);
CREATE INDEX idx_stripe_webhooks_type ON stripe_webhook_events(event_type);
CREATE INDEX idx_stripe_webhooks_processed ON stripe_webhook_events(processed);

CREATE INDEX idx_payment_history_user_id ON payment_history(user_id);
CREATE INDEX idx_payment_history_organization_id ON payment_history(organization_id);
CREATE INDEX idx_payment_history_invoice_id ON payment_history(invoice_id);
CREATE INDEX idx_payment_history_status ON payment_history(status);
CREATE INDEX idx_payment_history_created_at ON payment_history(created_at);

-- Add triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_stripe_subscriptions_updated_at 
    BEFORE UPDATE ON stripe_subscriptions 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Add comments
COMMENT ON TABLE stripe_subscriptions IS 'Tracks user subscription status and billing cycles';
COMMENT ON TABLE stripe_webhook_events IS 'Logs all Stripe webhook events for processing';
COMMENT ON TABLE payment_history IS 'Complete history of all payments and transactions';

-- Add constraints to ensure plan_type matches valid subscription plans
ALTER TABLE stripe_subscriptions
ADD CONSTRAINT check_plan_type 
CHECK (plan_type IN ('personal', 'personal_plus', 'premium', 'pro')); 