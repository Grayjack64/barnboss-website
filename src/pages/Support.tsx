import React, { useState } from 'react';
import { Search, Book, MessageCircle, Phone, Mail, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';

const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Getting Started',
      items: [
        {
          question: 'How do I create my first horse profile?',
          answer: 'After signing up, click "Add Horse" from your dashboard. Fill in basic information like name, breed, age, and any medical history. You can always add more details later.'
        },
        {
          question: 'How do I invite my stable to share data?',
          answer: 'Go to Settings > Sharing, then click "Invite Stable." Enter your stable\'s email address and they\'ll receive an invitation to connect with your horse\'s profile.'
        },
        {
          question: 'Can I try premium features before upgrading?',
          answer: 'Yes! Ranch and Pro tiers include a 30-day free trial. You can explore all features risk-free and cancel anytime during the trial period.'
        }
      ]
    },
    {
      category: 'Billing & Payments',
      items: [
        {
          question: 'How does billing integration with QuickBooks work?',
          answer: 'Pro tier users can export invoices and financial data directly to QuickBooks. Go to Billing > Export, select your date range, and choose QuickBooks format.'
        },
        {
          question: 'Can clients pay invoices through the app?',
          answer: 'Yes, Pro tier includes in-app payment processing. Clients receive a link with their invoice and can pay securely using credit cards or bank transfers.'
        },
        {
          question: 'How do I track services for billing?',
          answer: 'Use the Service Tracker in Pro tier. Log services as you perform them, set rates, and BarnBoss automatically generates invoices based on your tracked time and services.'
        }
      ]
    },
    {
      category: 'Task Management',
      items: [
        {
          question: 'How do I assign tasks to my team?',
          answer: 'In Ranch or Pro tiers, go to Tasks > Create Task. You can assign to specific workers, roles (like "Grooms"), or make tasks available to all team members.'
        },
        {
          question: 'Can I set recurring tasks?',
          answer: 'Absolutely! When creating a task, select "Recurring" and set your schedule (daily, weekly, monthly, or custom intervals). Perfect for feeding schedules and regular maintenance.'
        },
        {
          question: 'How do I track task completion?',
          answer: 'Team members can mark tasks complete from their mobile app. You\'ll see real-time updates in your dashboard, including photos if workers document their completed work.'
        }
      ]
    }
  ];

  const tutorials = [
    {
      title: 'Setting up your first horse profile',
      duration: '3:24',
      description: 'Learn how to create comprehensive horse profiles with health history and care preferences.'
    },
    {
      title: 'Sending owner invitations',
      duration: '2:15',
      description: 'Step-by-step guide to connecting with horse owners for real-time data sharing.'
    },
    {
      title: 'Using the AI Wiki for health advice',
      duration: '4:08',
      description: 'Discover how to get instant equine health insights and symptom guidance.'
    },
    {
      title: 'Setting up automated billing',
      duration: '5:42',
      description: 'Configure service tracking and automated invoicing for seamless billing.'
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Can We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-green-600">
              Help You?
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers, get support, and make the most of your BarnBoss experience
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, tutorials, or FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Help Center</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides and documentation for all BarnBoss features.
              </p>
              <a href="#faq" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                Browse Articles <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Get instant help from our support team. Available for Ranch and Pro tier users.
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
                Start Chat <MessageCircle className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone Support</h3>
              <p className="text-gray-600 mb-4">
                Direct phone support for Pro tier subscribers during business hours.
              </p>
              <a href="tel:1-800-BARNBOSS" className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                1-800-BARNBOSS <Phone className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Tutorials</h2>
            <p className="text-xl text-gray-600">Learn BarnBoss with step-by-step video guides</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 h-32 flex items-center justify-center">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
                      {tutorial.duration}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
                  <p className="text-sm text-gray-600">{tutorial.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find quick answers to common questions</p>
          </div>
          
          <div className="space-y-8">
            {filteredFaqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.items.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isExpanded = expandedFaq === globalIndex;
                    
                    return (
                      <div key={faqIndex} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setExpandedFaq(isExpanded ? null : globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          {isExpanded ? (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        {isExpanded && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Wiki Preview */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Free AI Equine Wiki
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get instant access to comprehensive equine health and management knowledge, 
                  powered by AI and verified by veterinary experts.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Health Symptoms & Conditions</h4>
                    <p className="text-gray-600 text-sm">Identify and understand common equine health issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Breed-Specific Care</h4>
                    <p className="text-gray-600 text-sm">Tailored advice for different horse breeds and disciplines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emergency Protocols</h4>
                    <p className="text-gray-600 text-sm">Step-by-step guidance for emergency situations</p>
                  </div>
                </div>
              </div>
              
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-medium">
                Access AI Wiki Free
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3662870/pexels-photo-3662870.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Equine health and care"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help you succeed with BarnBoss
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm mb-4">Get help via email, usually within 24 hours</p>
              <a
                href="mailto:support@barnboss.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                support@barnboss.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Community Forum</h3>
              <p className="text-gray-600 text-sm mb-4">Connect with other BarnBoss users</p>
              <a
                href="#"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Join Community
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <Phone className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Priority Support</h3>
              <p className="text-gray-600 text-sm mb-4">Phone support for Pro tier subscribers</p>
              <a
                href="tel:1-800-BARNBOSS"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                1-800-BARNBOSS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;