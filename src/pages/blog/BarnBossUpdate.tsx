import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Sparkles, Brain, DollarSign, Zap, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const BarnBossUpdate = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-50 to-green-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
              BarnBoss Updates
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            BarnBoss 2.1 Update: New AI Health Insights and Improved Billing
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Our latest update brings enhanced AI-powered health recommendations and streamlined billing features based on user feedback.
          </p>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>BarnBoss Staff</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>January 10, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>4 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="/images/tasks_sm.png"
            alt="BarnBoss software interface and updates"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Release Announcement */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Sparkles className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">BarnBoss 2.1 is Now Available!</h2>
              <p className="text-gray-600">Released January 10, 2025</p>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            We're excited to announce the release of BarnBoss 2.1, our most significant update yet! 
            This release focuses on two key areas that our users have been requesting: smarter health 
            monitoring through AI-powered insights and a completely redesigned billing system that 
            makes financial management effortless.
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Over the past six months, we've been working closely with our community of stable managers, 
            veterinarians, and horse owners to understand the biggest challenges in equine management. 
            The feedback was clear: while BarnBoss already excels at organization and task management, 
            users wanted more intelligent health insights and simpler billing workflows.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            BarnBoss 2.1 delivers on both fronts with groundbreaking AI technology and a completely 
            reimagined billing experience. Let's dive into what's new and how these features will 
            transform your stable management.
          </p>
        </div>

        {/* Major Features */}
        <div className="space-y-12">
          {/* AI Health Insights */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">🧠 AI-Powered Health Insights</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our new AI Health Engine analyzes patterns in your horses' data to provide proactive 
              health recommendations and early warning alerts. This isn't just data collection—it's 
              intelligent analysis that helps you stay ahead of potential health issues.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-gray-900 mb-3">🔍 Pattern Recognition</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Identifies subtle changes in behavior patterns</li>
                  <li>• Correlates weather, diet, and activity data</li>
                  <li>• Learns each horse's individual baseline</li>
                  <li>• Flags deviations before they become problems</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-gray-900 mb-3">⚡ Smart Alerts</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Early colic risk assessments</li>
                  <li>• Lameness probability scoring</li>
                  <li>• Vaccination and health reminders</li>
                  <li>• Seasonal health recommendations</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Real User Success Story</h4>
              <blockquote className="text-gray-700 italic">
                "The AI caught a subtle change in my mare's eating pattern three days before she showed 
                any visible signs of discomfort. The early intervention saved us from a potential colic episode."
              </blockquote>
              <p className="text-sm text-gray-600 mt-2">— Sarah M., Training Stable Owner</p>
            </div>
          </div>

          {/* Improved Billing */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">💰 Streamlined Billing System</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              We've completely redesigned the billing experience based on extensive user feedback. 
              The new system reduces billing time by up to 75% while improving accuracy and client transparency.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">✨ What's New in Billing</h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h5 className="font-medium text-gray-900 mb-2">Auto-Invoice Generation</h5>
                    <p className="text-sm text-gray-700">Automatically creates invoices based on services and time tracking</p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h5 className="font-medium text-gray-900 mb-2">One-Click Payments</h5>
                    <p className="text-sm text-gray-700">Integrated payment processing with multiple options</p>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h5 className="font-medium text-gray-900 mb-2">Smart Pricing</h5>
                    <p className="text-sm text-gray-700">Dynamic pricing based on services, time, and custom rates</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">📊 Enhanced Financial Reporting</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Revenue Analytics</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Monthly and yearly revenue trends</li>
                      <li>• Service-based profitability analysis</li>
                      <li>• Client lifetime value tracking</li>
                      <li>• Seasonal performance insights</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Expense Management</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Automated expense categorization</li>
                      <li>• Feed and supply cost tracking</li>
                      <li>• Veterinary expense analysis</li>
                      <li>• Tax-ready financial reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Experience Improvements */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <Sparkles className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">🎨 Enhanced User Experience</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Beyond the major features, we've made dozens of smaller improvements that add up to 
              a significantly better user experience across the entire platform.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">🚀 Performance Improvements</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 40% faster page loading times</li>
                  <li>• Improved mobile responsiveness</li>
                  <li>• Offline mode for essential features</li>
                  <li>• Enhanced search functionality</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">🎯 Interface Refinements</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Streamlined navigation menu</li>
                  <li>• Improved data visualization</li>
                  <li>• Better notification management</li>
                  <li>• Enhanced accessibility features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Migration Guide */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔄 Upgrading to BarnBoss 2.1</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            The upgrade process is seamless and automatic for all existing users. Here's what you need to know:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-gray-900 mb-2">✅ Automatic Update</h4>
              <p className="text-gray-700">
                All users will automatically receive the update over the next 48 hours. No action required on your part.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-gray-900 mb-2">📚 New Feature Training</h4>
              <p className="text-gray-700">
                We've created step-by-step tutorials for all new features. Access them from the Help menu after your update.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-400">
              <h4 className="font-semibold text-gray-900 mb-2">🆘 Support Available</h4>
              <p className="text-gray-700">
                Our support team is standing by to help with any questions about the new features. Contact us anytime.
              </p>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-amber-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 What's Coming Next</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            BarnBoss 2.1 is just the beginning. Here's a sneak peek at what we're working on for future releases:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌐 Advanced Integrations</h4>
              <p className="text-gray-700 text-sm">
                Direct connections with popular veterinary software and feed suppliers.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">📱 Mobile App Enhancements</h4>
              <p className="text-gray-700 text-sm">
                Expanded mobile capabilities including photo recognition and voice notes.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🤖 Advanced AI Features</h4>
              <p className="text-gray-700 text-sm">
                Predictive analytics for breeding, training optimization, and preventive care.
              </p>
            </div>
          </div>
        </div>

        {/* User Feedback */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💬 What Our Users Are Saying</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="text-gray-700 italic mb-4">
                "The AI health insights have already helped me catch two potential issues before they 
                became serious. This update is a game-changer for preventive horse care."
              </blockquote>
              <p className="text-sm text-gray-600">— Dr. Michael Chen, Equine Veterinarian</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="text-gray-700 italic mb-4">
                "The new billing system cut my monthly invoicing time from 8 hours to 2 hours. 
                I can finally focus on what I love—caring for horses."
              </blockquote>
              <p className="text-sm text-gray-600">— Jennifer Rodriguez, Stable Manager</p>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            We're incredibly grateful for the feedback and support from our user community. Every feature 
            in this update was directly inspired by your suggestions and needs. Keep the feedback coming—
            it's what drives us to make BarnBoss better every day.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-green-600 rounded-2xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Experience BarnBoss 2.1 Today</h3>
          <p className="mb-6">
            Ready to transform your stable management with AI-powered insights and streamlined billing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BarnBossUpdate; 