import React from 'react';
import { Heart, CheckSquare, DollarSign, CreditCard, Users, Brain, Clock, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      category: 'Health & Care Tracking',
      icon: Heart,
      available: 'All Tiers',
      items: [
        'Feeding schedules and nutrition tracking',
        'Treatment and medication records',
        'Coggins reports and health certificates',
        'Symptom logging for conditions (colic, laminitis)',
        'Veterinary visit history',
        'Vaccination schedules'
      ],
      image: '/images/healthcare_sm.png'
    },
    {
      category: 'Task Management',
      icon: CheckSquare,
      available: 'Ranch, Pro',
      items: [
        'Assign tasks to workers, roles, or globally',
        'Automated scheduling and reminders',
        'Progress tracking and completion status',
        'Priority levels and due dates',
        'Photo documentation for tasks',
        'Mobile notifications for urgent items'
      ],
      image: '/images/tasks_sm.png'
    },
    {
      category: 'Financial Tracking',
      icon: BarChart3,
      available: 'Ranch, Pro',
      items: [
        'Revenue and expense tracking per horse',
        'Breeding cost analysis and ROI',
        'Feed and supply expense monitoring',
        'Profit/loss reports by horse or operation',
        'Budget planning and forecasting',
        'Tax-ready financial summaries'
      ],
      image: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      category: 'Billing & Services',
      icon: CreditCard,
      available: 'Pro Only',
      items: [
        'Service tracking and time logging',
        'Professional invoicing with branding',
        'In-app payment processing',
        'QuickBooks and CSV export',
        'Recurring billing automation',
        'Payment tracking and reminders'
      ],
      image: '/images/billing_sm.png'
    },
    {
      category: 'Owner-Operation Sync',
      icon: Users,
      available: 'All Tiers',
      items: [
        'Invite-based data sharing',
        'Real-time updates for horse care',
        'Billing transparency for owners',
        'Photo and video sharing',
        'Communication logs and notes',
        'Permission-based access control'
      ],
      image: 'https://images.pexels.com/photos/3662826/pexels-photo-3662826.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      category: 'AI Wiki',
      icon: Brain,
      available: 'All Tiers - FREE',
      items: [
        'Equine health and management advice',
        'Symptom checker for common conditions',
        'Breed-specific care guidelines',
        'Training tips and techniques',
        'Nutrition recommendations',
        'Emergency care protocols'
      ],
      image: '/images/wiki_sm.png'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Every{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-green-600">
              Equine Need
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From solo owners to large stables, BarnBoss has comprehensive tools to streamline 
            your horse management and boost your operation's efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-semibold shadow-lg">
              Explore Features with Free Personal Account
            </button>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {feature.category}
                      </h2>
                      <p className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full inline-block mt-2">
                        Available in: {feature.available}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="w-full h-80 overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                    <img
                      src={feature.image}
                      alt={feature.category}
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See the Impact BarnBoss Makes
            </h2>
            <p className="text-xl text-gray-300">
              Real results from our beta testing community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                stat: '90%',
                label: 'Reduction in bookkeeping time',
                description: 'Automated billing and task management save hours weekly'
              },
              {
                icon: DollarSign,
                stat: '25%',
                label: 'Average revenue increase',
                description: 'Digital service tracking captures missed billing opportunities'
              },
              {
                icon: Users,
                stat: '1000+',
                label: 'Beta testers trust BarnBoss',
                description: 'Growing community of satisfied horse professionals'
              }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-amber-400">{stat.stat}</h3>
                  <p className="text-xl font-semibold mt-2">{stat.label}</p>
                  <p className="text-gray-300 mt-2">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Horse Management?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start with our free Personal tier and experience the difference BarnBoss makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-semibold shadow-lg">
              Sign Up Free Now
            </button>
            <a
              href="/pricing"
              className="px-8 py-4 border-2 border-amber-300 text-amber-700 rounded-xl hover:bg-amber-50 transition-all duration-200 font-semibold"
            >
              Compare All Plans
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;