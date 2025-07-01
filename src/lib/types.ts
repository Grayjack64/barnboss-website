// Database Types based on MJ Horse Manager schema
export interface UserProfile {
  id: string
  user_id: string
  account_type: 'personal' | 'personal_plus' | 'premium' | 'pro'
  display_name: string | null
  bio: string | null
  profile_image_url: string | null
  preferences: Record<string, any>
  account_settings: Record<string, any>
  is_active: boolean
  // Stripe integration fields
  stripe_customer_id: string | null
  stripe_connect_account_id: string | null
  stripe_onboarding_completed: boolean
  stripe_charges_enabled: boolean
  stripe_payouts_enabled: boolean
  created_at: string
  updated_at: string
}

export interface Organization {
  id: string
  name: string
  description: string
  subscription_tier: 'basic' | 'premium' | 'pro'
  owner_id: string
  member_count: number
  is_active: boolean
  // Stripe integration fields
  stripe_connect_account_id: string | null
  stripe_onboarding_completed: boolean
  stripe_charges_enabled: boolean
  stripe_payouts_enabled: boolean
  stripe_default_payment_method: string | null
  created_at: string
  updated_at: string
}

export interface OrganizationMember {
  id: string
  organization_id: string
  user_id: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  joined_at: string
}

export interface Role {
  id: string
  organization_id: string
  name: string
  description: string
  permissions: string[]
  can_manage_organization: boolean
  can_manage_horses: boolean
  can_assign_tasks: boolean
  created_at: string
}

export interface Horse {
  id: string
  name: string
  breed?: string
  color?: string
  birth_date?: string
  registration_number?: string
  organization_id: string
  created_at: string
  updated_at: string
}

export interface Invoice {
  id: string
  organization_id: string
  invoice_number: string
  sender_organization_id: string | null
  recipient_organization_id: string | null
  customer_name: string | null
  status: 'draft' | 'sent' | 'paid' | 'overdue'
  total_amount: number
  line_items: Record<string, any> | null
  due_date: string | null
  paid_date: string | null
  // Stripe integration fields
  stripe_invoice_id: string | null
  stripe_payment_intent_id: string | null
  stripe_session_id: string | null
  payment_link_url: string | null
  stripe_status: string | null
  stripe_customer_id: string | null
  payment_method_types: string[] | null
  stripe_fee_amount: number | null
  net_amount: number | null
  created_at: string
  updated_at: string
}

// Auth Context Types
export interface AuthState {
  user: any | null // Supabase User type
  profile: UserProfile | null
  organization: Organization | null
  loading: boolean
}

export interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, fullName: string) => Promise<any>
  signOut: () => Promise<void>
  refreshAuth: () => Promise<void>
}

// Stripe Integration Types
export interface StripeSubscription {
  id: string
  user_id: string
  organization_id: string | null
  stripe_subscription_id: string
  stripe_customer_id: string
  status: 'active' | 'canceled' | 'incomplete' | 'past_due' | 'trialing' | 'unpaid'
  plan_type: 'personal' | 'personal_plus' | 'premium' | 'pro'
  current_period_start: string | null
  current_period_end: string | null
  cancel_at_period_end: boolean
  canceled_at: string | null
  trial_start: string | null
  trial_end: string | null
  metadata: Record<string, any>
  created_at: string
  updated_at: string
}

export interface PaymentHistory {
  id: string
  user_id: string
  organization_id: string | null
  invoice_id: string | null
  subscription_id: string | null
  stripe_payment_intent_id: string | null
  stripe_charge_id: string | null
  amount: number
  currency: string
  status: 'succeeded' | 'failed' | 'pending' | 'canceled'
  payment_method_type: string | null
  failure_reason: string | null
  stripe_fee: number | null
  net_amount: number | null
  metadata: Record<string, any>
  created_at: string
}

export interface StripeWebhookEvent {
  id: string
  stripe_event_id: string
  event_type: string
  processed: boolean
  processing_attempts: number
  last_processing_error: string | null
  payload: Record<string, any>
  created_at: string
  processed_at: string | null
}

// Subscription Plan Types
export type SubscriptionPlan = 'personal' | 'personal_plus' | 'premium' | 'pro'

export interface PlanDetails {
  name: string
  price: number
  interval: 'month' | 'year'
  features: string[]
  stripe_price_id: string
}

// Payment-related types
export interface CreatePaymentIntentData {
  amount: number
  currency: string
  customer_id?: string
  invoice_id?: string
  metadata?: Record<string, any>
}

export interface CreateSubscriptionData {
  customer_id: string
  price_id: string
  trial_days?: number
  metadata?: Record<string, any>
} 