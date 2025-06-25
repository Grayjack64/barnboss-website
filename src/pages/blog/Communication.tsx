import React from 'react';
import { Calendar, User, Clock, ArrowLeft, MessageSquare, Users, Heart, CheckCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Communication = () => {
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
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              Management Tips
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Trust: Best Practices for Owner-Stable Communication
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Effective communication is the foundation of successful stable management. Learn proven strategies to build trust, prevent misunderstandings, and create lasting partnerships.
          </p>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>BarnBoss Staff</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>January 6, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="/images/working_sm.png"
            alt="Stable manager communicating with horse owners"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            In the equine industry, trust isn't just important—it's everything. Horse owners entrust you 
            with their most precious companions, and that responsibility extends far beyond daily care. 
            Clear, consistent communication forms the bedrock of successful stable management, directly 
            impacting client satisfaction, business growth, and the overall well-being of the horses in your care.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Whether you're managing a small boarding facility or overseeing a large training operation, 
            the principles of effective communication remain the same. This guide will provide you with 
            proven strategies to build lasting relationships, prevent conflicts, and create an environment 
            where both horses and their owners thrive.
          </p>
        </div>

        {/* Foundation of Trust */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">The Foundation: Understanding What Owners Need</h2>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Before diving into communication strategies, it's essential to understand what horse owners 
            truly need from their stable relationship. At its core, every owner wants to feel confident 
            that their horse is safe, healthy, and receiving the best possible care.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">🛡️ Security and Safety</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Assurance their horse is physically safe</li>
                <li>• Confidence in emergency procedures</li>
                <li>• Trust in facility security measures</li>
                <li>• Peace of mind when they're not present</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">📊 Transparency and Information</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Regular updates on their horse's condition</li>
                <li>• Clear information about care routines</li>
                <li>• Honest communication about any issues</li>
                <li>• Access to records and documentation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mt-6">
            <h4 className="font-semibold text-gray-900 mb-3">💡 Key Insight</h4>
            <p className="text-gray-700">
              Remember that for many owners, their horse represents a significant emotional and financial 
              investment. Your communication should acknowledge and respect this relationship while 
              maintaining professional boundaries.
            </p>
          </div>
        </div>

        {/* Communication Strategies */}
        <div className="space-y-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Essential Communication Strategies</h2>
            </div>
            
            <div className="space-y-8">
              {/* Proactive Communication */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">📢 1. Proactive Communication</h4>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Don't wait for owners to ask for updates. Proactive communication demonstrates 
                  professionalism and builds confidence in your care standards.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Daily Updates</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Send regular photo/video updates</li>
                      <li>• Report on eating, drinking, and behavior</li>
                      <li>• Share positive moments and milestones</li>
                      <li>• Note any changes, however minor</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Weekly Summaries</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Comprehensive health and behavior overview</li>
                      <li>• Training progress reports</li>
                      <li>• Upcoming schedule and plans</li>
                      <li>• Any concerns or recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Clear Expectations */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">📋 2. Set Clear Expectations from Day One</h4>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Prevent misunderstandings by establishing clear expectations and boundaries at the 
                  beginning of every relationship.
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h5 className="font-medium text-gray-900 mb-2">Service Agreements</h5>
                    <p className="text-gray-700 text-sm">
                      Provide detailed written agreements covering care standards, communication 
                      protocols, emergency procedures, and billing practices.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium text-gray-900 mb-2">Communication Preferences</h5>
                    <p className="text-gray-700 text-sm">
                      Ask owners about their preferred communication methods, frequency, and the 
                      types of information they want to receive regularly.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h5 className="font-medium text-gray-900 mb-2">Emergency Protocols</h5>
                    <p className="text-gray-700 text-sm">
                      Clearly outline when and how you'll contact them for various scenarios, 
                      including veterinary decisions and treatment authorization.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Technology Integration */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">📱 3. Leverage Technology Effectively</h4>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Modern stable management software can streamline communication while providing 
                  comprehensive documentation and transparency.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h5 className="font-medium text-gray-900 mb-2">Instant Updates</h5>
                    <p className="text-sm text-gray-700">Real-time notifications for important events and changes</p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h5 className="font-medium text-gray-900 mb-2">Task Tracking</h5>
                    <p className="text-sm text-gray-700">Transparent visibility into daily care tasks and completion</p>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Mail className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h5 className="font-medium text-gray-900 mb-2">Automated Reports</h5>
                    <p className="text-sm text-gray-700">Regular summaries and health reports delivered automatically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Difficult Conversations */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Navigating Difficult Conversations</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Not every conversation will be easy. Health issues, behavioral problems, and financial 
              concerns require careful handling to maintain trust while addressing serious matters.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-gray-900 mb-3">🚨 Health Emergencies</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Immediate Response</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Contact owner immediately, regardless of time</li>
                      <li>• Provide clear, factual information</li>
                      <li>• Explain immediate actions taken</li>
                      <li>• Offer multiple communication channels</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Follow-up Communication</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Regular updates on condition changes</li>
                      <li>• Clear explanation of treatment plans</li>
                      <li>• Photos/videos when appropriate</li>
                      <li>• Coordination with veterinary team</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-400">
                <h4 className="font-semibold text-gray-900 mb-3">💰 Financial Discussions</h4>
                
                <p className="text-gray-700 mb-4">
                  Money conversations require extra sensitivity. Be transparent, provide detailed 
                  explanations, and offer solutions when possible.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <strong className="text-gray-900">Do:</strong> 
                    <span className="text-gray-700"> Provide itemized billing, explain unexpected charges, offer payment plans</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <strong className="text-gray-900">Don't:</strong> 
                    <span className="text-gray-700"> Surprise owners with large bills, be vague about costs, avoid difficult conversations</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-gray-900 mb-3">🐴 Behavioral Issues</h4>
                
                <p className="text-gray-700 mb-4">
                  When horses develop behavioral problems, focus on solutions while maintaining 
                  objectivity and professionalism.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Problem Documentation</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Record specific incidents with dates/times</li>
                      <li>• Include photos or videos when safe</li>
                      <li>• Note potential triggers or patterns</li>
                      <li>• Document safety measures taken</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Solution-Focused Approach</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Present multiple options for resolution</li>
                      <li>• Suggest professional consultations</li>
                      <li>• Offer modified care arrangements</li>
                      <li>• Focus on horse and human safety</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Building Long-term Relationships */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Building Long-term Relationships</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Great communication isn't just about solving problems—it's about creating lasting 
              partnerships that benefit everyone involved, especially the horses.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">🎯 Personal Connection Strategies</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Know Your Clients</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Remember personal details and preferences</li>
                      <li>• Understand their goals and aspirations</li>
                      <li>• Recognize their horse's unique personality</li>
                      <li>• Acknowledge important milestones</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Go Above and Beyond</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Celebrate achievements and improvements</li>
                      <li>• Provide educational resources</li>
                      <li>• Offer advice and support</li>
                      <li>• Create memorable experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">📈 Continuous Improvement</h4>
                
                <p className="text-gray-700 mb-4">
                  Regularly assess and improve your communication practices based on feedback and results.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h5 className="font-medium text-gray-900">Regular Feedback Sessions</h5>
                      <p className="text-gray-700 text-sm">Schedule periodic check-ins to discuss satisfaction and areas for improvement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h5 className="font-medium text-gray-900">Communication Audits</h5>
                      <p className="text-gray-700 text-sm">Review your communication patterns and adjust based on client preferences</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h5 className="font-medium text-gray-900">Technology Updates</h5>
                      <p className="text-gray-700 text-sm">Stay current with communication tools and platforms that enhance client experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BarnBoss Integration */}
        <div className="bg-amber-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How BarnBoss Enhances Owner Communication</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            BarnBoss provides comprehensive tools to streamline and enhance your communication with horse owners, 
            building trust through transparency and consistency.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">📱 Real-time Updates</h4>
              <p className="text-gray-700 text-sm">
                Send instant notifications about feeding, turnout, health changes, and daily activities with photos and notes.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">📊 Comprehensive Reports</h4>
              <p className="text-gray-700 text-sm">
                Generate detailed weekly and monthly reports covering health, behavior, training progress, and care activities.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💬 Centralized Communication</h4>
              <p className="text-gray-700 text-sm">
                Keep all conversations, updates, and important information in one organized, searchable platform.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Communication: The Heart of Exceptional Care</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Effective communication is more than just sharing information—it's about building relationships 
            based on trust, transparency, and mutual respect. When horse owners feel confident in your 
            communication, they're more likely to trust your expertise, follow your recommendations, and 
            maintain long-term partnerships with your facility.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Remember that every interaction is an opportunity to strengthen or weaken trust. By implementing 
            these communication strategies consistently, you'll create an environment where horses thrive, 
            owners feel valued, and your business grows through positive relationships and referrals. The 
            investment in excellent communication pays dividends in client satisfaction, business success, 
            and personal fulfillment in your work with horses.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-green-600 rounded-2xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Transform Your Client Communication Today</h3>
          <p className="mb-6">
            Discover how BarnBoss can help you build stronger relationships with horse owners through 
            better communication and transparency.
          </p>
          <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Building Trust
          </button>
        </div>
      </article>
    </div>
  );
};

export default Communication; 