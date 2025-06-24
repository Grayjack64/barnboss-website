import React from 'react';
import { Clock, TrendingUp, Smartphone, BarChart3, Users, Lightbulb, ArrowRight } from 'lucide-react';

const WhyBarnBoss = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Automate tasks and billing, freeing hours for horse care',
      benefit: '90% reduction in bookkeeping time',
      details: [
        'Automated billing and invoicing',
        'Smart task scheduling and reminders',
        'One-click reporting and summaries',
        'Streamlined record keeping'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Digital tracking boosts revenue by 25%, per industry studies',
      benefit: '25% average revenue increase',
      details: [
        'Capture all billable services',
        'Reduce missed billing opportunities',
        'Professional invoicing builds trust',
        'Track ROI on breeding and training'
      ]
    },
    {
      icon: Smartphone,
      title: 'Ease of Use',
      description: 'Intuitive app designed for owners, workers, and trainers',
      benefit: 'User-friendly for all skill levels',
      details: [
        'Simple, clean interface design',
        'Mobile-first responsive experience',
        'Quick onboarding and setup',
        'Contextual help and guidance'
      ]
    },
    {
      icon: BarChart3,
      title: 'Scalability',
      description: 'From one horse to large stables, BarnBoss grows with you',
      benefit: 'Scales from 1 to unlimited horses',
      details: [
        'Flexible tier structure',
        'Team collaboration features',
        'Multi-location support',
        'Enterprise-grade reliability'
      ]
    },
    {
      icon: Users,
      title: 'Transparency',
      description: 'Real-time data sharing keeps owners and stables aligned',
      benefit: 'Improved owner-stable relationships',
      details: [
        'Real-time health and care updates',
        'Transparent billing and services',
        'Photo and video sharing',
        'Communication logs and notes'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'AI wiki delivers instant equine insights, free for all users',
      benefit: 'Expert knowledge at your fingertips',
      details: [
        'Comprehensive equine health database',
        'Symptom checker and diagnostics',
        'Breed-specific care guidance',
        'Training tips and techniques'
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why BarnBoss is the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-green-600">
                Ultimate Horse Management Solution
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how BarnBoss transforms horse management with proven results, 
              innovative features, and unmatched value for your operation.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional horse management"
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Professional Horse Management</h3>
              <p className="text-lg opacity-90">Trusted by 1000+ beta testers worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-lg flex-shrink-0">
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{reason.description}</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                      <p className="text-green-800 font-semibold text-sm">{reason.benefit}</p>
                    </div>
                    <ul className="space-y-2">
                      {reason.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Real Results: Sunrise Stables Case Study
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  See how a Pro Tier stable transformed their operations and boosted profitability 
                  with BarnBoss's comprehensive management tools.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h4 className="font-semibold text-red-800 mb-2">The Challenge</h4>
                  <p className="text-red-700 text-sm">
                    Manual billing processes led to missed revenue opportunities and consumed 15+ hours weekly. 
                    Owner communication was inconsistent, causing trust issues.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">The Solution</h4>
                  <p className="text-blue-700 text-sm">
                    Adopted BarnBoss Pro Tier for comprehensive service tracking, automated billing, 
                    and QuickBooks integration. Implemented real-time owner communication system.
                  </p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h4 className="font-semibold text-green-800 mb-2">The Results</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• 25% increase in monthly revenue within 3 months</li>
                    <li>• 90% reduction in billing time (from 15 hours to 1.5 hours/week)</li>
                    <li>• 100% improvement in owner satisfaction scores</li>
                    <li>• ROI of 400% in the first quarter</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                <img
                  src="/images/tasks.png"
                  alt="Successful stable management"
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Feedback */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Beta Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from horse professionals using BarnBoss
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "BarnBoss streamlined my ranch operations! The task management alone saves me hours every week.",
                author: "John Martinez",
                role: "Ranch Manager",
                location: "Texas"
              },
              {
                quote: "The billing automation has been a game-changer. I'm capturing revenue I used to miss completely.",
                author: "Sarah Thompson",
                role: "Training Stable Owner",
                location: "Kentucky"
              },
              {
                quote: "My clients love getting real-time updates about their horses. It's improved our relationships significantly.",
                author: "Mike Chen",
                role: "Boarding Facility Manager",
                location: "California"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See Why BarnBoss is Trusted by Horse Professionals
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join over 1,000 beta testers who have transformed their horse management operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold shadow-lg flex items-center justify-center group">
              Start Free Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/case-studies"
              className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all duration-200 font-semibold"
            >
              Read More Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyBarnBoss;