import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Why BarnBoss', path: '/why-barnboss' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    ...(user ? [] : [{ name: 'Login', path: '/login' }]),
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg border-b border-amber-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/images/logo.png" 
              alt="BarnBoss Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
              BarnBoss
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-amber-100 text-amber-800'
                    : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons / User Menu - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              // Authenticated user menu
              <>
                <Link
                  to="/dashboard"
                  className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium flex items-center ${
                    isActive('/dashboard')
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-blue-700 border border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Hi, {profile?.full_name || user.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-red-700 border border-red-300 rounded-lg hover:bg-red-50 transition-all duration-200 font-medium flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              // Guest user buttons
              <>
                <Link
                  to="/download"
                  className="px-4 py-2 text-amber-700 border border-amber-300 rounded-lg hover:bg-amber-50 transition-all duration-200 font-medium"
                >
                  Download
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-amber-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-amber-100 text-amber-800'
                    : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-3 pt-4">
              {user ? (
                // Mobile authenticated menu
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-center text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium"
                  >
                    Dashboard
                  </Link>
                  <div className="text-center text-sm text-gray-600 py-2">
                    {profile?.full_name || user.email}
                  </div>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 text-center text-red-700 border border-red-300 rounded-lg hover:bg-red-50 transition-all duration-200 font-medium"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                // Mobile guest menu
                <>
                  <Link
                    to="/download"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-center text-amber-700 border border-amber-300 rounded-lg hover:bg-amber-50 transition-all duration-200 font-medium"
                  >
                    Download
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-medium text-center"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;