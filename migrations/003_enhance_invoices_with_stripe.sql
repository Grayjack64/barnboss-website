-- Migration: Enhance invoices table with Stripe integration
-- Description: Add Stripe payment tracking fields to existing invoices
-- Date: Generated for manual execution

-- Add Stripe fields to existing invoices table
ALTER TABLE invoices
ADD COLUMN stripe_invoice_id VARCHAR(255),
ADD COLUMN stripe_payment_intent_id VARCHAR(255),
ADD COLUMN stripe_session_id VARCHAR(255),
ADD COLUMN payment_link_url TEXT,
ADD COLUMN stripe_status VARCHAR(50),
ADD COLUMN stripe_customer_id VARCHAR(255),
ADD COLUMN payment_method_types TEXT[], -- Array of accepted payment methods
ADD COLUMN stripe_fee_amount DECIMAL(10,2),
ADD COLUMN net_amount DECIMAL(10,2); -- Amount after Stripe fees

-- Create indexes for performance
CREATE INDEX idx_invoices_stripe_invoice ON invoices(stripe_invoice_id);
CREATE INDEX idx_invoices_stripe_payment_intent ON invoices(stripe_payment_intent_id);
CREATE INDEX idx_invoices_stripe_session ON invoices(stripe_session_id);
CREATE INDEX idx_invoices_stripe_customer ON invoices(stripe_customer_id);
CREATE INDEX idx_invoices_stripe_status ON invoices(stripe_status);

-- Add comments for documentation
COMMENT ON COLUMN invoices.stripe_invoice_id IS 'Stripe Invoice ID for tracking';
COMMENT ON COLUMN invoices.stripe_payment_intent_id IS 'Stripe Payment Intent ID';
COMMENT ON COLUMN invoices.stripe_session_id IS 'Stripe Checkout Session ID';
COMMENT ON COLUMN invoices.payment_link_url IS 'Stripe Payment Link for customer payments';
COMMENT ON COLUMN invoices.stripe_status IS 'Stripe payment status (draft, open, paid, void, uncollectible)';
COMMENT ON COLUMN invoices.stripe_customer_id IS 'Stripe Customer ID who is being invoiced';
COMMENT ON COLUMN invoices.payment_method_types IS 'Array of accepted payment methods (card, ach_debit)';
COMMENT ON COLUMN invoices.stripe_fee_amount IS 'Stripe processing fee amount';
COMMENT ON COLUMN invoices.net_amount IS 'Amount received after Stripe fees'; 