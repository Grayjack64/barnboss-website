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
            BarnBoss Beta Launch: Revolutionary Stable Management is Here
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            We're excited to announce the official Beta launch of BarnBoss - the comprehensive stable management platform that's transforming equine care.
          </p>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>BarnBoss Staff</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>6 min read</span>
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

        {/* Beta Launch Announcement */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Sparkles className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">BarnBoss Beta is Now Live!</h2>
              <p className="text-gray-600">Join the Revolution - January 15, 2025</p>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            After months of development and testing with leading equine professionals, we're thrilled 
            to announce the official Beta launch of BarnBoss! This groundbreaking platform represents 
            a new era in stable management, combining cutting-edge technology with deep understanding 
            of equine care to create the most comprehensive solution available today.
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            The equine industry has been waiting for a truly modern solution to stable management 
            challenges. Traditional methods—spreadsheets, paper records, and disconnected systems—
            simply can't keep pace with the demands of today's horse operations. That's why we 
            created BarnBoss: to bridge the gap between old-school horse care and cutting-edge technology.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Our Beta launch represents more than just a new software platform—it's the beginning 
            of a transformation in how we care for horses. From AI-powered health insights to 
            seamless communication tools, BarnBoss is designed by horse people, for horse people. 
            Let's explore what makes this platform revolutionary.
          </p>
        </div>

        {/* Major Features */}
        <div className="space-y-12">
          {/* Complete Health Management */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">🏥 Complete Health Management</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              BarnBoss revolutionizes equine health management with comprehensive tracking, AI-powered 
              insights, and seamless veterinary integration. Monitor everything from daily observations 
              to complex medical histories in one unified platform.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-gray-900 mb-3">📋 Health Records</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Complete medical history tracking</li>
                  <li>• Vaccination and medication schedules</li>
                  <li>• Veterinary visit documentation</li>
                  <li>• Photo and video health logs</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-gray-900 mb-3">🤖 AI Health Insights</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Early warning system for health issues</li>
                  <li>• Pattern recognition and alerts</li>
                  <li>• Personalized care recommendations</li>
                  <li>• Predictive health analytics</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Beta Tester Feedback</h4>
              <blockquote className="text-gray-700 italic">
                "BarnBoss has transformed how we manage health records. The AI insights helped us catch 
                early signs of laminitis in one of our horses before it became serious."
              </blockquote>
              <p className="text-sm text-gray-600 mt-2">— Dr. Lisa Martinez, Equine Veterinarian</p>
            </div>
          </div>

          {/* Smart Task Management */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">⚡ Smart Task Management</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Never miss a feeding, medication, or care task again. BarnBoss intelligently prioritizes 
              and schedules all stable activities, ensuring your horses receive consistent, timely care 
              while optimizing your team's workflow efficiency.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">🎯 Core Task Features</h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h5 className="font-medium text-gray-900 mb-2">Smart Scheduling</h5>
                    <p className="text-sm text-gray-700">Automatically schedules recurring tasks and adapts to changes</p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h5 className="font-medium text-gray-900 mb-2">Priority Management</h5>
                    <p className="text-sm text-gray-700">Intelligent prioritization based on urgency and horse needs</p>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h5 className="font-medium text-gray-900 mb-2">Team Coordination</h5>
                    <p className="text-sm text-gray-700">Real-time task assignment and progress tracking</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">📊 Complete Business Management</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Billing & Invoicing</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Automated invoice generation</li>
                      <li>• Flexible pricing and service packages</li>
                      <li>• Payment tracking and reminders</li>
                      <li>• Financial reporting and analytics</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Communication Hub</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Owner messaging and updates</li>
                      <li>• Photo and video sharing</li>
                      <li>• Automated progress reports</li>
                      <li>• Emergency notification system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Beta Program Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <Sparkles className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">🌟 Join the Beta Program</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              As a Beta user, you'll get exclusive access to cutting-edge features, direct input on 
              product development, and special pricing as we continue to refine and expand the platform.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">🎁 Beta User Benefits</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Early access to new features</li>
                  <li>• Direct feedback channel to development team</li>
                  <li>• Special Beta pricing locked in for life</li>
                  <li>• Priority customer support</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">🚀 What to Expect</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Regular feature updates and improvements</li>
                  <li>• Responsive bug fixes and optimizations</li>
                  <li>• Community-driven feature development</li>
                  <li>• Seamless transition to full release</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Getting Started with BarnBoss Beta</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Ready to transform your stable management? Here's how to get started with BarnBoss Beta:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-gray-900 mb-2">1️⃣ Sign Up for Beta Access</h4>
              <p className="text-gray-700">
                Request your Beta invitation at mybarnboss.com. We're accepting a limited number of stables to ensure quality support.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-gray-900 mb-2">2️⃣ Complete Your Setup</h4>
              <p className="text-gray-700">
                Our onboarding team will help you import your data and configure BarnBoss for your specific needs.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-400">
              <h4 className="font-semibold text-gray-900 mb-2">3️⃣ Start Managing Smarter</h4>
              <p className="text-gray-700">
                Begin experiencing the future of stable management with comprehensive training and ongoing support.
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="bg-amber-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🗺️ Our Development Roadmap</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Beta launch is just the beginning. Here's what we're planning for the coming months 
            based on industry needs and Beta user feedback:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌐 Integration Ecosystem</h4>
              <p className="text-gray-700 text-sm">
                Seamless connections with veterinary clinics, feed suppliers, and equine insurance providers.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">📱 Advanced Mobile Features</h4>
              <p className="text-gray-700 text-sm">
                Enhanced mobile app with offline capabilities, photo recognition, and voice-to-text notes.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🎯 Specialized Modules</h4>
              <p className="text-gray-700 text-sm">
                Industry-specific features for breeding operations, training facilities, and therapeutic programs.
              </p>
            </div>
          </div>
        </div>

        {/* Beta Tester Feedback */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💬 What Beta Testers Are Saying</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="text-gray-700 italic mb-4">
                "BarnBoss has completely transformed our stable operations. The AI health monitoring 
                caught a subtle lameness issue three days before our vet visit—potentially saving 
                thousands in treatment costs."
              </blockquote>
              <p className="text-sm text-gray-600">— Sarah Thompson, Sunrise Stables</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="text-gray-700 italic mb-4">
                "As a veterinarian, I love how BarnBoss gives me instant access to comprehensive 
                health records. It's made my consultations more efficient and my recommendations 
                more accurate."
              </blockquote>
              <p className="text-sm text-gray-600">— Dr. Michael Rodriguez, DVM</p>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Our Beta testing program has been incredible, with over 50 stables providing invaluable 
            feedback that shaped every aspect of the platform. Their insights have been instrumental 
            in creating a solution that truly meets the needs of modern equine operations.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-green-600 rounded-2xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join the BarnBoss Beta Today</h3>
          <p className="mb-6">
            Ready to revolutionize your stable management? Be among the first to experience the future of equine care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Beta Access
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