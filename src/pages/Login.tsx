import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Auth } from '../components/auth/Auth'

export const Login: React.FC = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  // If user is authenticated, don't render login form
  if (user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 -mt-16 pt-16">
      <Auth />
    </div>
  )
} 