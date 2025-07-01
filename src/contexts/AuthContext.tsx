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

  // Fetch user profile from database
  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_account_profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle() // Use maybeSingle() instead of single() to handle 0 or 1 results

      if (error) {
        console.error('Error fetching user profile:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Error fetching user profile:', error)
      return null
    }
  }

  // Fetch user's organization (if they're a member)
  const fetchUserOrganization = async (userId: string) => {
    try {
      // Try to fetch organizations the user owns first
      const { data: orgData, error: orgError } = await supabase
        .from('organizations')
        .select('*')
        .eq('owner_id', userId)
        .limit(1)
        .maybeSingle()

      if (orgError) {
        console.error('Error fetching owned organizations:', orgError)
        return null
      }

      if (orgData) {
        return orgData
      }

      // If user doesn't own any organizations, try to find organization membership
      // This is wrapped in try/catch in case the organization_members table doesn't exist
      try {
        const { data: memberData, error: memberError } = await supabase
          .from('organization_members')
          .select('organization_id')
          .eq('user_id', userId)
          .maybeSingle()

        if (memberError) {
          console.warn('organization_members table might not exist:', memberError)
          return null
        }

        if (!memberData) {
          return null
        }

        // Fetch the organization details
        const { data: memberOrgData, error: memberOrgError } = await supabase
          .from('organizations')
          .select('*')
          .eq('id', memberData.organization_id)
          .maybeSingle()

        if (memberOrgError) {
          console.error('Error fetching member organization:', memberOrgError)
          return null
        }

        return memberOrgData
      } catch (membershipError) {
        console.warn('Could not check organization membership:', membershipError)
        return null
      }
    } catch (error) {
      console.error('Error fetching user organization:', error)
      return null
    }
  }

  // Initialize auth state
  const initializeAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.user) {
        setUser(session.user)
        
        // Fetch user profile and organization
        const [userProfile, userOrganization] = await Promise.all([
          fetchUserProfile(session.user.id),
          fetchUserOrganization(session.user.id)
        ])

        setProfile(userProfile)
        setOrganization(userOrganization)
      }
    } catch (error) {
      console.error('Error initializing auth:', error)
    } finally {
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
    initializeAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user)
        
        const [userProfile, userOrganization] = await Promise.all([
          fetchUserProfile(session.user.id),
          fetchUserOrganization(session.user.id)
        ])

        setProfile(userProfile)
        setOrganization(userOrganization)
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
        setProfile(null)
        setOrganization(null)
      }
    })

    return () => subscription.unsubscribe()
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