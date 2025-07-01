import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  Settings, 
  CreditCard, 
  Building2, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  Crown,
  Zap,
  Trophy,
  Star
} from 'lucide-react'
import { SubscriptionPlans } from '../components/subscription/SubscriptionPlans'

interface StripeConnectStatus {
  account_id?: string
  onboarding_completed: boolean
  charges_enabled: boolean
  payouts_enabled: boolean
  requirements_due: string[]
}

export const AccountSettings: React.FC = () => {
  const { user, profile, organization, refreshAuth } = useAuth()
  const [activeTab, setActiveTab] = useState<'account' | 'subscription' | 'connect'>('account')
  const [connectStatus, setConnectStatus] = useState<StripeConnectStatus | null>(null)
  const [loading, setLoading] = useState(false)

  // Check Stripe Connect status for Pro users
  useEffect(() => {
    if (organization?.subscription_tier === 'pro') {
      fetchConnectStatus()
    }
  }, [organization])

  const fetchConnectStatus = async () => {
    if (!organization?.stripe_connect_account_id) return

    // For now, infer status from organization data
    setConnectStatus({
      account_id: organization.stripe_connect_account_id,
      onboarding_completed: organization.stripe_onboarding_completed || false,
      charges_enabled: organization.stripe_charges_enabled || false,
      payouts_enabled: organization.stripe_payouts_enabled || false,
      requirements_due: []
    })
  }

  const handleConnectOnboarding = async () => {
    if (!organization?.id || !user?.email) return

    setLoading(true)
    try {
      // Get auth token for API call
      const authToken = localStorage.getItem('sb-access-token') || 
                       sessionStorage.getItem('sb-access-token')

      if (!authToken) {
        throw new Error('Authentication required')
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-stripe-connect-account`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          organization_id: organization.id,
          email: user.email,
          organization_name: organization.name
        }),
      })

      const data = await response.json()
      
      if (!response.ok || data.error) {
        throw new Error(data.error || 'Failed to create Connect account')
      }

      if (data.onboarding_url) {
        // Redirect to Stripe onboarding
        window.location.href = data.onboarding_url
      }
    } catch (error) {
      console.error('Error starting Connect onboarding:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Failed to start onboarding: ${errorMessage}`)
    } finally {
      setLoading(false)
    }
  }

  const handleRefreshConnectStatus = async () => {
    setLoading(true)
    try {
      // Refresh the auth context to get latest organization data
      await refreshAuth()
      
      // Update connect status based on refreshed organization data
      if (organization?.stripe_connect_account_id) {
        await fetchConnectStatus()
      }
    } catch (error) {
      console.error('Error refreshing Connect status:', error)
    } finally {
      setLoading(false)
    }
  }

  const getSubscriptionIcon = (tier: string) => {
    switch (tier) {
      case 'personal': return <Star className="h-5 w-5 text-blue-600" />
      case 'personal_plus': return <Zap className="h-5 w-5 text-purple-600" />
      case 'premium': return <Trophy className="h-5 w-5 text-green-600" />
      case 'pro': return <Crown className="h-5 w-5 text-amber-600" />
      default: return <Star className="h-5 w-5 text-gray-600" />
    }
  }

  const getSubscriptionPrice = (tier: string) => {
    switch (tier) {
      case 'personal': return 'Free'
      case 'personal_plus': return '$9.99/month'
      case 'premium': return '$49.99/month'
      case 'pro': return '$249/month'
      default: return 'Unknown'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Account Settings
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your subscription, billing, and account preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('account')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'account'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Settings className="h-4 w-4 inline mr-2" />
              Account
            </button>
            <button
              onClick={() => setActiveTab('subscription')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'subscription'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <CreditCard className="h-4 w-4 inline mr-2" />
              Subscription
            </button>
            {organization?.subscription_tier === 'pro' && (
              <button
                onClick={() => setActiveTab('connect')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'connect'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Building2 className="h-4 w-4 inline mr-2" />
                Payment Collection
              </button>
            )}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'account' && (
          <div className="space-y-6">
            {/* Account Information */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Account Information
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1 text-sm text-gray-900">{user?.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Display Name</label>
                    <p className="mt-1 text-sm text-gray-900">
                      {profile?.display_name || user?.user_metadata?.full_name || 'Not set'}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Account Type</label>
                    <p className="mt-1 text-sm text-gray-900 capitalize">
                      {profile?.account_type || 'Not set'}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Organization</label>
                    <p className="mt-1 text-sm text-gray-900">
                      {organization?.name || 'No organization'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'subscription' && (
          <div className="space-y-6">
            {/* Current Subscription */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Current Subscription
                </h3>
                {organization ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {getSubscriptionIcon(organization.subscription_tier)}
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 capitalize">
                          {organization.subscription_tier.replace('_', ' ')}
                        </p>
                        <p className="text-sm text-gray-500">
                          {getSubscriptionPrice(organization.subscription_tier)}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                ) : (
                  <p className="text-gray-500">No subscription found</p>
                )}
              </div>
            </div>

            {/* Upgrade/Manage Subscription */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Manage Subscription
                </h3>
                <SubscriptionPlans 
                  currentPlan={organization?.subscription_tier as any}
                  userId={user?.id}
                  organizationId={organization?.id}
                  onSelectPlan={(plan) => {
                    console.log('Selected plan:', plan)
                    // Refresh the page to show updated subscription
                    window.location.reload()
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'connect' && organization?.subscription_tier === 'pro' && (
          <div className="space-y-6">
            {/* Stripe Connect Status */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Payment Collection Setup
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  As a Pro user, you can create invoices and collect payments from your clients. 
                  Set up your payment collection account to get started.
                </p>

                {connectStatus ? (
                  <div className="space-y-4">
                    {/* Account Status */}
                    <div className="flex items-center">
                      {connectStatus.onboarding_completed ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                      )}
                      <span className="text-sm font-medium">
                        Account Setup: {connectStatus.onboarding_completed ? 'Complete' : 'Incomplete'}
                      </span>
                    </div>

                    {/* Charges Enabled */}
                    <div className="flex items-center">
                      {connectStatus.charges_enabled ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span className="text-sm font-medium">
                        Payment Collection: {connectStatus.charges_enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>

                    {/* Payouts Enabled */}
                    <div className="flex items-center">
                      {connectStatus.payouts_enabled ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span className="text-sm font-medium">
                        Payouts: {connectStatus.payouts_enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>

                    {/* Requirements */}
                    {connectStatus.requirements_due.length > 0 && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-yellow-400" />
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">
                              Additional Information Required
                            </h3>
                            <div className="mt-2 text-sm text-yellow-700">
                              <ul className="list-disc pl-5 space-y-1">
                                {connectStatus.requirements_due.map((req, index) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex space-x-4">
                      <button
                        onClick={handleRefreshConnectStatus}
                        disabled={loading}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
                      >
                        {loading ? 'Refreshing...' : 'Refresh Status'}
                      </button>
                      
                      {!connectStatus.onboarding_completed && (
                        <button
                          onClick={handleConnectOnboarding}
                          disabled={loading}
                          className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 disabled:opacity-50 flex items-center"
                        >
                          Complete Setup
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Set Up Payment Collection
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Create invoices and collect payments from your clients. 
                      We'll guide you through a secure setup process.
                    </p>
                    <button
                      onClick={handleConnectOnboarding}
                      disabled={loading}
                      className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center mx-auto"
                    >
                      {loading ? 'Starting Setup...' : 'Get Started'}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Revenue Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-lg font-medium text-blue-900 mb-2">
                How Payment Collection Works
              </h4>
              <div className="text-sm text-blue-800 space-y-2">
                <p>• Create professional invoices for your services</p>
                <p>• Clients pay securely with cards or bank transfers</p>
                <p>• Funds are deposited directly to your bank account</p>
                <p>• BarnBoss charges a 3% platform fee + Stripe processing fees</p>
                <p>• Track all payments and generate reports</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 