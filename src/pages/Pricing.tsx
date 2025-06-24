import React from 'react';
import { Check, Star, ArrowRight, X } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: 'Personal',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for individual horse owners',
      popular: false,
      features: [
        { name: 'Track 1 horse', included: true },
        { name: 'Health & Care Tracking', included: true },
        { name: 'AI Wiki Access', included: true },
        { name: 'Owner-Operation Sync (Limited)', included: true },
        { name: 'Task Management', included: false },
        { name: 'Financial Tracking', included: false },
        { name: 'Billing & Invoicing', included: false },
        { name: 'QuickBooks Export', included: false }
      ],
      cta: 'Start Free',
      ctaStyle: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
    },
    {
      name: 'PersonalPro',
      price: '$7.99',
      period: 'per month',
      description: 'For owners with multiple horses',
      popular: false,
      features: [
        { name: 'Track up to 5 horses', included: true },
        { name: 'Health & Care Tracking', included: true },
        { name: 'AI Wiki Access', included: true },
        { name: 'Owner-Operation Sync (Limited)', included: true },
        { name: 'Task Management', included: false },
        { name: 'Financial Tracking', included: false },
        { name: 'Billing & Invoicing', included: false },
        { name: 'QuickBooks Export', included: false }
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'border-2 border-amber-300 text-amber-700 hover:bg-amber-50'
    },
    {
      name: 'Ranch',
      price: '$47.99',
      period: 'per month',
      description: 'Complete management for ranches',
      popular: true,
      features: [
        { name: 'Unlimited horses', included: true },
        { name: 'Health & Care Tracking', included: true },
        { name: 'AI Wiki Access', included: true },
        { name: 'Full Owner-Operation Sync', included: true },
        { name: 'Task Management', included: true },
        { name: 'Worker Assignment', included: true },
        { name: 'Financial Tracking', included: true },
        { name: 'Breeding Tracking', included: true },
        { name: 'Service Tracking & Billing', included: false },
        { name: 'QuickBooks Export', included: false }
      ],
      cta: 'Try Ranch for 30 Days',
      ctaStyle: 'bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800'
    },
    {
      name: 'Pro',
      price: '$249',
      period: 'per month',
      description: 'Full-featured for professional stables',
      popular: false,
      features: [
        { name: 'Unlimited horses', included: true },
        { name: 'Health & Care Tracking', included: true },
        { name: 'AI Wiki Access', included: true },
        { name: 'Full Owner-Operation Sync', included: true },
        { name: 'Task Management', included: true },
        { name: 'Worker Assignment', included: true },
        { name: 'Financial Tracking', included: true },
        { name: 'Breeding Tracking', included: true },
        { name: 'Service Tracking & Billing', included: true },
        { name: 'QuickBooks/CSV Export', included: true },
        { name: 'In-App Client Payments', included: true }
      ],
      cta: 'Try Pro for 30 Days',
      ctaStyle: 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800'
    }
  ];

  const faqs = [
    {
      question: "What's included in the free tier?",
      answer: "The Personal tier includes tracking for 1 horse, full health & care tracking, AI Wiki access, and limited owner-operation sync features. It's perfect for individual horse owners who want to get started with digital horse management."
    },
    {
      question: "Can I switch tiers later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. When you upgrade, you'll get immediate access to new features. If you downgrade, you'll retain access to premium features until your current billing period ends."
    },
    {
      question: "How does owner-operation syncing work?",
      answer: "Owner-operation sync allows horse owners and stable managers to share real-time data about horse care, health updates, and billing. Owners can invite their stable to share data, and stables can keep owners updated on their horse's care and any services provided."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Pro tier subscribers also get access to in-app payment processing for their own clients."
    },
    {
      question: "Is there a discount for annual billing?",
      answer: "Yes! Save 10% when you choose annual billing on any paid plan. This discount is automatically applied at checkout when you select yearly billing."
    },
    {
      question: "Can I try Ranch or Pro tiers before committing?",
      answer: "Yes! Both Ranch and Pro tiers come with a 30-day free trial. No credit card required to start your trial, and you can cancel anytime during the trial period."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose the BarnBoss Plan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-green-600">
              That Fits Your Stable
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From individual horse owners to large professional stables, we have a plan that scales with your needs.
          </p>
          <div className="bg-amber-100 border border-amber-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-amber-800 font-medium">
              💡 PersonalPro is FREE for owners with horses in a Pro Tier stable!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-200 hover:shadow-xl ${
                  tier.popular 
                    ? 'border-amber-300 relative transform scale-105' 
                    : 'border-gray-200 hover:border-amber-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                      {tier.price !== 'Free' && (
                        <span className="text-gray-600 ml-2">/{tier.period}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${tier.ctaStyle}`}>
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Notes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">30-Day Free Trials</h4>
                <p className="text-sm text-gray-600">Try Ranch and Pro tiers risk-free for 30 days</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Annual Discount</h4>
                <p className="text-sm text-gray-600">Save 10% with yearly billing on all paid plans</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Easy Upgrades</h4>
                <p className="text-sm text-gray-600">Switch plans anytime as your needs grow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Trusted by Beta Testers</h3>
          <p className="text-lg text-gray-300 mb-8">
            Join over 1,000 horse professionals who saved 90% on bookkeeping time with BarnBoss
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-semibold shadow-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;