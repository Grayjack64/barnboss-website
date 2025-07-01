import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, Users, Brain, Star, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/5 to-green-900/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  BarnBoss: Your Stable,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-green-600">
                    Simplified
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Manage Horses, Tasks, and Profits with Ease. The all-in-one solution for horse owners, 
                  ranch managers, and professional stables.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/features"
                  className="px-8 py-4 border-2 border-amber-200 text-amber-700 rounded-xl hover:bg-amber-50 transition-all duration-200 font-semibold flex items-center justify-center"
                >
                  See Features
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Horse and owner in stable"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BarnBoss?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by horse owners and professionals to streamline operations and boost profits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Save Time',
                description: 'Cut bookkeeping by 90% with automated billing and task management',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: TrendingUp,
                title: 'Boost Revenue',
                description: 'Capture 25% more revenue with digital service tracking and billing',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Users,
                title: 'Seamless Integration',
                description: 'Connect owners and stables with real-time horse data sharing',
                color: 'from-amber-500 to-amber-600'
              },
              {
                icon: Brain,
                title: 'AI-Powered',
                description: 'Free equine care wiki with instant health and management tips',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Snapshot */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Everything You Need in One App
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  From health tracking to billing automation, BarnBoss provides comprehensive 
                  tools for modern horse management.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  'Health & Care Tracking with symptom logging',
                  'Automated task assignment and scheduling',
                  'Revenue tracking and financial analysis',
                  'Professional billing and invoicing',
                  'Real-time owner-stable synchronization',
                  'AI-powered equine health wiki'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/features"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-medium group"
              >
                Explore All Features
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative">
                          <img
              src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80"
              alt="Professional stable management"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Horse Professionals
            </h2>
            <p className="text-xl text-gray-600">
              See what our beta testers are saying about BarnBoss
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Professional Trainer',
                quote: 'BarnBoss halved my billing time! The automated invoicing is a game-changer for my training business.',
                rating: 5
              },
              {
                name: 'Mike Rodriguez',
                role: 'Ranch Manager',
                quote: 'The task management features help me coordinate our entire team. Everyone knows what needs to be done.',
                rating: 5
              },
              {
                name: 'Lisa Chen',
                role: 'Horse Owner',
                quote: 'I love being able to track my horse\'s health and see updates from the stable in real-time.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center px-6 py-3 text-amber-700 border border-amber-300 rounded-lg hover:bg-amber-50 transition-all duration-200 font-medium"
            >
              Read More Testimonials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Top Horse Owners. Start Free Today.
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join top horse professionals that trust BarnBoss to manage their horses and operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold shadow-lg">
              Get Started Free
            </button>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all duration-200 font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;