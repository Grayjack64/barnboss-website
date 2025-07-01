import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { Horse, Invoice } from '../lib/types'
import { LogOut, Building, User, Heart, FileText, DollarSign, Settings, Crown } from 'lucide-react'

export const Dashboard: React.FC = () => {
  const { user, profile, organization, signOut } = useAuth()
  const [horses, setHorses] = useState<Horse[]>([])
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (!organization) return

      try {
        // Fetch horses for the organization
        const { data: horsesData, error: horsesError } = await supabase
          .from('horses')
          .select('*')
          .eq('organization_id', organization.id)
          .limit(5)

        if (horsesError) {
          console.error('Error fetching horses:', horsesError)
        } else {
          setHorses(horsesData || [])
        }

        // Fetch recent invoices
        const { data: invoicesData, error: invoicesError } = await supabase
          .from('invoices')
          .select('*')
          .eq('organization_id', organization.id)
          .order('created_at', { ascending: false })
          .limit(5)

        if (invoicesError) {
          console.error('Error fetching invoices:', invoicesError)
        } else {
          setInvoices(invoicesData || [])
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [organization])

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">BarnBoss Dashboard</h1>
              <p className="text-gray-600">Welcome back, {profile?.display_name || user?.user_metadata?.full_name || user?.email}</p>
            </div>
            <div className="flex space-x-3">
              {organization?.subscription_tier === 'pro' && (
                <a
                  href="/pro-dashboard"
                  className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  <Crown className="h-4 w-4 mr-2" />
                  Pro Dashboard
                </a>
              )}
              <a
                href="/account-settings"
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </a>
              <button
                onClick={handleSignOut}
                className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* User Profile Section */}
        <div className="mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                <User className="inline h-5 w-5 mr-2" />
                Profile Information
              </h3>
              {!profile && (
                <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Profile Setup Required</h3>
                      <p className="mt-1 text-sm text-yellow-700">
                        Your user profile needs to be created. Please contact support to complete your profile setup.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Display Name</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {profile?.display_name || user?.user_metadata?.full_name || 'Not set'}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-sm text-gray-900">{user?.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Account Type</label>
                  <p className="mt-1 text-sm text-gray-900 capitalize">
                    {profile?.account_type || 'Profile not set up'}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {profile?.is_active ? 'Active' : profile ? 'Inactive' : 'Profile not set up'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Section */}
        {organization && (
          <div className="mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  <Building className="inline h-5 w-5 mr-2" />
                  Organization
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="mt-1 text-sm text-gray-900">{organization.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Subscription Tier</label>
                    <span className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                      {organization.subscription_tier}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Member Count</label>
                    <p className="mt-1 text-sm text-gray-900">{organization.member_count}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <span className={`mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      organization.is_active 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {organization.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
                {organization.description && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <p className="mt-1 text-sm text-gray-900">{organization.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Data Overview */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Horses Section */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                <Heart className="inline h-5 w-5 mr-2" />
                Recent Horses ({horses.length})
              </h3>
              {horses.length > 0 ? (
                <div className="space-y-3">
                  {horses.map((horse) => (
                    <div key={horse.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{horse.name}</h4>
                          {horse.breed && (
                            <p className="text-sm text-gray-600">Breed: {horse.breed}</p>
                          )}
                          {horse.color && (
                            <p className="text-sm text-gray-600">Color: {horse.color}</p>
                          )}
                        </div>
                        {horse.registration_number && (
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            #{horse.registration_number}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No horses found</p>
              )}
            </div>
          </div>

          {/* Invoices Section */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                <FileText className="inline h-5 w-5 mr-2" />
                Recent Invoices ({invoices.length})
              </h3>
              {invoices.length > 0 ? (
                <div className="space-y-3">
                  {invoices.map((invoice) => (
                    <div key={invoice.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">#{invoice.invoice_number}</h4>
                          <p className="text-sm text-gray-600">Customer: {invoice.customer_name}</p>
                          <p className="text-sm text-gray-600">
                            Due: {new Date(invoice.due_date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 text-green-600" />
                            <span className="font-medium">{invoice.total_amount}</span>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                            invoice.status === 'paid' 
                              ? 'bg-green-100 text-green-800'
                              : invoice.status === 'overdue'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {invoice.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No invoices found</p>
              )}
            </div>
          </div>
        </div>

        {/* Debug Info */}
        <div className="mt-8 bg-gray-100 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Debug Information</h3>
          <div className="text-xs text-gray-600 space-y-1">
            <p>User ID: {user?.id}</p>
            <p>Profile ID: {profile?.id}</p>
            <p>Organization ID: {organization?.id}</p>
            <p>Connection Status: ✅ Connected to Supabase</p>
          </div>
        </div>
      </main>
    </div>
  )
} 