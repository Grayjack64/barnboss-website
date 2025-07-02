import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { AuthContextType, UserProfile, Organization } from '../lib/types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [organization, setOrganization] = useState<Organization | null>(null)
  const [loading, setLoading] = useState(true)

  // Safety timeout to prevent infinite loading
  useEffect(() => {
    console.log('🔧 AuthContext: Loading state changed to:', loading)
    
    if (loading) {
      const timeoutId = setTimeout(() => {
        console.log('⚠️ AuthContext: Loading timeout reached, forcing loading to false')
        setLoading(false)
      }, 10000) // 10 second timeout

      return () => clearTimeout(timeoutId)
    }
  }, [loading])

  // Fetch user profile from database
  const fetchUserProfile = async (userId: string) => {
    console.log('🔧 AuthContext: fetchUserProfile called for userId:', userId)
    try {
      const { data, error } = await supabase
        .from('user_account_profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle() // Use maybeSingle() instead of single() to handle 0 or 1 results

      if (error) {
        console.error('🚨 AuthContext: Error fetching user profile:', error)
        return null
      }

      console.log('🔧 AuthContext: fetchUserProfile result:', data)
      return data
    } catch (error) {
      console.error('🚨 AuthContext: Exception in fetchUserProfile:', error)
      return null
    }
  }

  // Fetch user's organization (if they're a member)
  const fetchUserOrganization = async (userId: string) => {
    console.log('🔧 AuthContext: fetchUserOrganization called for userId:', userId)
    try {
      // Try to fetch organizations the user owns first
      console.log('🔧 AuthContext: Checking for owned organizations...')
      const { data: orgData, error: orgError } = await supabase
        .from('organizations')
        .select('*')
        .eq('owner_id', userId)
        .limit(1)
        .maybeSingle()

      if (orgError) {
        console.error('🚨 AuthContext: Error fetching owned organizations:', orgError)
        return null
      }

      if (orgData) {
        console.log('🔧 AuthContext: Found owned organization:', orgData.name)
        return orgData
      }

      console.log('🔧 AuthContext: No owned organizations, checking membership...')
      // If user doesn't own any organizations, try to find organization membership
      // This is wrapped in try/catch in case the organization_members table doesn't exist
      try {
        const { data: memberData, error: memberError } = await supabase
          .from('organization_members')
          .select('organization_id')
          .eq('user_id', userId)
          .maybeSingle()

        if (memberError) {
          console.warn('⚠️ AuthContext: organization_members table might not exist:', memberError)
          return null
        }

        if (!memberData) {
          console.log('🔧 AuthContext: No organization membership found')
          return null
        }

        console.log('🔧 AuthContext: Found membership, fetching organization details...')
        // Fetch the organization details
        const { data: memberOrgData, error: memberOrgError } = await supabase
          .from('organizations')
          .select('*')
          .eq('id', memberData.organization_id)
          .maybeSingle()

        if (memberOrgError) {
          console.error('🚨 AuthContext: Error fetching member organization:', memberOrgError)
          return null
        }

        console.log('🔧 AuthContext: Found member organization:', memberOrgData?.name)
        return memberOrgData
      } catch (membershipError) {
        console.warn('⚠️ AuthContext: Could not check organization membership:', membershipError)
        return null
      }
    } catch (error) {
      console.error('🚨 AuthContext: Exception in fetchUserOrganization:', error)
      return null
    }
  }

  // Initialize auth state
  const initializeAuth = async () => {
    console.log('🔧 AuthContext: Starting auth initialization...')
    try {
      console.log('🔧 AuthContext: Getting session...')
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.user) {
        console.log('🔧 AuthContext: Session found, user:', session.user.email)
        setUser(session.user)
        
        // Fetch user profile and organization
        console.log('🔧 AuthContext: Fetching user profile and organization...')
        const [userProfile, userOrganization] = await Promise.all([
          fetchUserProfile(session.user.id),
          fetchUserOrganization(session.user.id)
        ])

        console.log('🔧 AuthContext: Profile:', userProfile)
        console.log('🔧 AuthContext: Organization:', userOrganization)
        
        setProfile(userProfile)
        setOrganization(userOrganization)
        console.log('🔧 AuthContext: Auth state updated successfully')
      } else {
        console.log('🔧 AuthContext: No active session found')
      }
    } catch (error) {
      console.error('🚨 AuthContext: Error initializing auth:', error)
    } finally {
      console.log('🔧 AuthContext: Setting loading to false')
      setLoading(false)
    }
  }

  // Sign in
  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      throw error
    }

    if (data.user) {
      setUser(data.user)
      
      // Fetch user profile and organization
      const [userProfile, userOrganization] = await Promise.all([
        fetchUserProfile(data.user.id),
        fetchUserOrganization(data.user.id)
      ])

      setProfile(userProfile)
      setOrganization(userOrganization)
    }
  }

  // Sign up
  const signUp = async (email: string, password: string, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName
        }
      }
    })

    if (error) {
      throw error
    }

    // Note: User profile will be created via database trigger
    return data
  }

  // Sign out
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      throw error
    }

    setUser(null)
    setProfile(null)
    setOrganization(null)
  }

  // Refresh authentication state
  const refreshAuth = async () => {
    if (user) {
      const [userProfile, userOrganization] = await Promise.all([
        fetchUserProfile(user.id),
        fetchUserOrganization(user.id)
      ])

      setProfile(userProfile)
      setOrganization(userOrganization)
    }
  }

  useEffect(() => {
    console.log('🔧 AuthContext: useEffect mounted, starting initialization...')
    initializeAuth()

    // Listen for auth changes
    console.log('🔧 AuthContext: Setting up auth state listener...')
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('🔧 AuthContext: Auth state change event:', event, session?.user?.email)
      
      if (event === 'SIGNED_IN' && session?.user) {
        console.log('🔧 AuthContext: Processing SIGNED_IN event...')
        setUser(session.user)
        
        const [userProfile, userOrganization] = await Promise.all([
          fetchUserProfile(session.user.id),
          fetchUserOrganization(session.user.id)
        ])

        setProfile(userProfile)
        setOrganization(userOrganization)
        console.log('🔧 AuthContext: SIGNED_IN processing complete')
      } else if (event === 'SIGNED_OUT') {
        console.log('🔧 AuthContext: Processing SIGNED_OUT event...')
        setUser(null)
        setProfile(null)
        setOrganization(null)
      }
    })

    return () => {
      console.log('🔧 AuthContext: Cleaning up auth listener...')
      subscription.unsubscribe()
    }
  }, [])

  const value: AuthContextType = {
    user,
    profile,
    organization,
    loading,
    signIn,
    signUp,
    signOut,
    refreshAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
} 