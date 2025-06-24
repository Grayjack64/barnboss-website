import React from 'react';
import { Star, Quote, TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Professional Trainer',
      location: 'Wellington, FL',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'BarnBoss halved my billing time! The automated invoicing is a game-changer for my training business. I can now focus on what I love most - working with horses.',
      rating: 5,
      tier: 'Pro',
      results: ['50% reduction in billing time', '25% increase in revenue', 'Improved client satisfaction']
    },
    {
      name: 'Mike Rodriguez',
      role: 'Ranch Manager',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The task management features help me coordinate our entire team of 12 workers. Everyone knows exactly what needs to be done and when. It\'s transformed our operations.',
      rating: 5,
      tier: 'Ranch',
      results: ['90% improvement in task completion', '30% increase in efficiency', 'Better team coordination']
    },
    {
      name: 'Lisa Chen',
      role: 'Horse Owner',
      location: 'Lexington, KY',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'I love being able to track my horse\'s health and see real-time updates from the stable. The AI wiki has been incredibly helpful for understanding symptoms.',
      rating: 5,
      tier: 'PersonalPro',
      results: ['Better health monitoring', 'Improved stable communication', 'Peace of mind']
    },
    {
      name: 'Dr. James Mitchell',
      role: 'Equine Veterinarian',
      location: 'Ocala, FL',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'BarnBoss has revolutionized how I work with my clients. The health tracking features provide detailed histories that help me make better diagnoses.',
      rating: 5,
      tier: 'Pro',
      results: ['More accurate diagnoses', 'Better client relationships', 'Streamlined record keeping']
    },
    {
      name: 'Amanda Foster',
      role: 'Boarding Stable Owner',
      location: 'Aiken, SC',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Managing 45 horses used to be overwhelming. Now with BarnBoss, I have complete visibility into every aspect of our operation. Our owners love the transparency.',
      rating: 5,
      tier: 'Pro',
      results: ['Complete operational visibility', 'Improved owner satisfaction', '40% time savings']
    },
    {
      name: 'Carlos Mendez',
      role: 'Breeding Farm Manager',
      location: 'Versailles, KY',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The breeding tracking and financial analysis features have helped us optimize our breeding program. We\'ve increased our success rate by 20%.',
      rating: 5,
      tier: 'Ranch',
      results: ['20% increase in breeding success', 'Better financial tracking', 'Data-driven decisions']
    }
  ];

  const caseStudy = {
    title: 'Sunrise Stables: A Complete Transformation',
    subtitle: 'How a 50-horse training facility increased revenue by 25% and cut administrative time by 90%',
    challenge: 'Sunrise Stables was struggling with manual billing processes that consumed 15+ hours weekly and led to missed revenue opportunities. Owner communication was inconsistent, causing trust issues and client turnover.',
    solution: 'The stable adopted BarnBoss Pro Tier, implementing comprehensive service tracking, automated billing, QuickBooks integration, and real-time owner communication features.',
    results: [
      { metric: '25%', description: 'Increase in monthly revenue within 3 months' },
      { metric: '90%', description: 'Reduction in billing time (from 15 hours to 1.5 hours/week)' },
      { metric: '100%', description: 'Improvement in owner satisfaction scores' },
      { metric: '400%', description: 'ROI in the first quarter' }
    ],
    testimonial: 'BarnBoss didn\'t just improve our operations - it transformed our entire business. We\'re now capturing revenue we never knew we were missing and our clients are happier than ever.',
    author: 'Jennifer Walsh, Owner of Sunrise Stables'
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-green-600">
              Horse Professionals
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See how BarnBoss is transforming horse management operations across the country. 
            Real stories from real users who've achieved measurable results.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { stat: '1000+', label: 'Happy Users' },
              { stat: '4.9/5', label: 'Average Rating' },
              { stat: '90%', label: 'Time Saved' },
              { stat: '25%', label: 'Revenue Boost' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-amber-600">{item.stat}</h3>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-600 to-green-600 rounded-2xl p-1">
            <div className="bg-white rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                  Featured Case Study
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {caseStudy.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {caseStudy.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-red-600 font-bold text-sm">1</span>
                      </div>
                      The Challenge
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold text-sm">2</span>
                      </div>
                      The Solution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold text-sm">3</span>
                    </div>
                    The Results
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="text-2xl font-bold text-green-600 mb-2">{result.metric}</h4>
                        <p className="text-gray-600 text-sm">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-amber-50 p-6 rounded-xl">
                <Quote className="h-8 w-8 text-amber-600 mb-4" />
                <p className="text-lg text-gray-700 italic mb-4">"{caseStudy.testimonial}"</p>
                <p className="text-gray-600 font-medium">— {caseStudy.author}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Users Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from horse professionals using BarnBoss every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                      {testimonial.tier}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>
                  {testimonial.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven Results Across the Industry
            </h2>
            <p className="text-xl text-gray-600">
              BarnBoss delivers measurable improvements for every type of horse operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Time Savings',
                metrics: [
                  { label: 'Average time saved on billing', value: '90%' },
                  { label: 'Reduction in administrative tasks', value: '75%' },
                  { label: 'Faster task completion', value: '60%' }
                ]
              },
              {
                icon: TrendingUp,
                title: 'Revenue Growth',
                metrics: [
                  { label: 'Average revenue increase', value: '25%' },
                  { label: 'Improved billing accuracy', value: '95%' },
                  { label: 'Faster payment collection', value: '40%' }
                ]
              },
              {
                icon: Users,
                title: 'Client Satisfaction',
                metrics: [
                  { label: 'Client satisfaction improvement', value: '85%' },
                  { label: 'Reduced client complaints', value: '70%' },
                  { label: 'Increased client retention', value: '30%' }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{metric.label}</span>
                      <span className="text-2xl font-bold text-green-600">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              See Success Stories in Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how BarnBoss has transformed operations for horse professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Training Stable Transformation',
                author: 'Sarah Johnson',
                duration: '3:24',
                thumbnail: 'https://images.pexels.com/photos/3663912/pexels-photo-3663912.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Ranch Management Success',
                author: 'Mike Rodriguez',
                duration: '4:15',
                thumbnail: 'https://images.pexels.com/photos/3094334/pexels-photo-3094334.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Boarding Facility Growth',
                author: 'Amanda Foster',
                duration: '2:58',
                thumbnail: 'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-l-6 border-l-amber-600 border-y-4 border-y-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">with {video.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Success Stories
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Start your own transformation today. Join over 1,000 horse professionals 
            who trust BarnBoss for their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold shadow-lg flex items-center justify-center group">
              Try BarnBoss Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all duration-200 font-semibold"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;