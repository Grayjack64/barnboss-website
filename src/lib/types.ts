// Database Types based on MJ Horse Manager schema
export interface UserProfile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  phone: string | null
  account_type: 'personal' | 'personal_plus' | 'pro'
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
  sender_organization_id: string
  recipient_organization_id: string
  customer_name: string
  status: 'draft' | 'sent' | 'paid' | 'overdue'
  total_amount: number
  due_date: string
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