import React from 'react'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

interface DiagnosticItemProps {
  label: string
  status: 'success' | 'error' | 'warning'
  details?: string
}

const DiagnosticItem: React.FC<DiagnosticItemProps> = ({ label, status, details }) => {
  const Icon = status === 'success' ? CheckCircle : status === 'error' ? XCircle : AlertCircle
  const colorClass = status === 'success' ? 'text-green-600' : status === 'error' ? 'text-red-600' : 'text-yellow-600'
  
  return (
    <div className="flex items-start space-x-3 py-2">
      <Icon className={`h-5 w-5 ${colorClass} mt-0.5`} />
      <div>
        <p className="font-medium text-gray-900">{label}</p>
        {details && <p className="text-sm text-gray-600">{details}</p>}
      </div>
    </div>
  )
}

export const SystemDiagnostic: React.FC = () => {
  const checkEnvironmentVars = () => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
    const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    
    return {
      supabaseUrl: {
        exists: !!supabaseUrl,
        value: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'undefined'
      },
      supabaseKey: {
        exists: !!supabaseKey,
        value: supabaseKey ? `${supabaseKey.substring(0, 20)}...` : 'undefined'
      },
      stripeKey: {
        exists: !!stripeKey,
        value: stripeKey ? `${stripeKey.substring(0, 20)}...` : 'undefined'
      }
    }
  }

  const checkLocalStorage = () => {
    try {
      const testKey = '__test_storage__'
      localStorage.setItem(testKey, 'test')
      localStorage.removeItem(testKey)
      return true
    } catch {
      return false
    }
  }

  const checkStripeLoading = () => {
    // Simple check for Stripe environment variable (no JavaScript loading)
    return !!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
  }

  const envVars = checkEnvironmentVars()
  const storageWorks = checkLocalStorage()
  const stripeConfigured = checkStripeLoading()

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">System Diagnostic</h3>
      <div className="space-y-3">
        <div>
          <DiagnosticItem
            label="Supabase URL"
            status={envVars.supabaseUrl.exists ? 'success' : 'error'}
            details={envVars.supabaseUrl.exists ? 'Configured' : 'Missing VITE_SUPABASE_URL'}
          />
          <p className="text-xs text-gray-500 ml-6 mt-1">Value: {envVars.supabaseUrl.value}</p>
        </div>
        
        <div>
          <DiagnosticItem
            label="Supabase Key"
            status={envVars.supabaseKey.exists ? 'success' : 'error'}
            details={envVars.supabaseKey.exists ? 'Configured' : 'Missing VITE_SUPABASE_ANON_KEY'}
          />
          <p className="text-xs text-gray-500 ml-6 mt-1">Value: {envVars.supabaseKey.value}</p>
        </div>
        
        <div>
          <DiagnosticItem
            label="Stripe Configuration"
            status={stripeConfigured ? 'success' : 'warning'}
            details={stripeConfigured ? 'Ready' : 'Missing VITE_STRIPE_PUBLISHABLE_KEY (payments disabled)'}
          />
          <p className="text-xs text-gray-500 ml-6 mt-1">Value: {envVars.stripeKey.value}</p>
        </div>
        
        <DiagnosticItem
          label="Local Storage"
          status={storageWorks ? 'success' : 'error'}
          details={storageWorks ? 'Working' : 'Blocked or unavailable'}
        />
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Environment Check:</h4>
        <div className="text-sm text-blue-800 space-y-1">
          <p>• <strong>Environment</strong>: {import.meta.env.PROD ? 'Production' : 'Development'}</p>
          <p>• <strong>Mode</strong>: {import.meta.env.MODE}</p>
          <p>• <strong>Base URL</strong>: {import.meta.env.BASE_URL}</p>
          {!envVars.supabaseUrl.exists || !envVars.supabaseKey.exists ? (
            <div className="mt-3 p-2 bg-red-100 rounded text-red-800">
              ⚠️ <strong>Missing Supabase environment variables!</strong><br/>
              Add these to your Netlify environment variables:
              <ul className="mt-1 list-disc ml-4">
                <li>VITE_SUPABASE_URL</li>
                <li>VITE_SUPABASE_ANON_KEY</li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-blue-50 rounded-md">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Quick Fixes:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Create a <code>.env</code> file with your environment variables</li>
          <li>• Check browser console for specific error messages</li>
          <li>• Try opening in incognito mode to test without extensions</li>
          <li>• Clear browser cache and localStorage</li>
        </ul>
      </div>
    </div>
  )
} 