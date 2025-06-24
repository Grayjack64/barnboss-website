import React from 'react';
import { Heart, Users, Target, Award } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Missy Jean "MJ" Etheridge',
      role: 'Co-Founder & CEO',
      bio: 'Horse owner and manager who experienced firsthand the challenges of coordinating care, workers, and operations that inspired BarnBoss.',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Danny Bannister',
      role: 'Co-Founder & CTO',
      bio: 'Technology expert and horse enthusiast who helped transform MJ\'s vision into a comprehensive digital solution.',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Woody Bannister',
      role: 'Co-Founder & COO',
      bio: 'Operations specialist with deep understanding of equine industry workflows and business processes.',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Danny Upchurch',
      role: 'Co-Founder & Head of Product',
      bio: 'Product development expert focused on creating intuitive solutions that address real-world horse management challenges.',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Horses',
      description: 'Every feature we build stems from genuine love and respect for horses and the people who care for them.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We listen to our users and build solutions that address real problems faced by the equine community.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to create solutions that were previously impossible in horse management.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from product quality to customer support.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Empowering the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-green-600">
                    Equine Community
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  BarnBoss was born from the real-world challenges faced by horse owners, 
                  trainers, and stable managers. We're on a mission to simplify care, 
                  management, and profitability through innovative technology.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                <img
                  src="/images/working.png"
                  alt="Horse care and management"
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To empower the equine community with tools that simplify care, enhance management, 
                  and drive profitability while fostering stronger relationships between horse owners 
                  and service providers.
                </p>
                <p className="text-gray-600">
                  We believe that technology should enhance, not complicate, the bond between humans 
                  and horses. Every feature we develop is designed with this principle in mind.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  BarnBoss was born from real frustration. Missy Jean 'MJ' Etheridge, our co-founder, 
                  found herself drowning in the chaos of managing her horses and coordinating workers. 
                  Sticky notes, spreadsheets, and endless phone calls weren't cutting it anymore.
                </p>
                <p className="text-gray-600 mb-6">
                  "I was losing track of feeding schedules, missing billing opportunities, and constantly 
                  worrying about my horses' care when I wasn't there," MJ recalls. Existing farm management 
                  tools were either too complex, too expensive, or designed for crops—not horses. The equine 
                  industry desperately needed something better.
                </p>
                <p className="text-gray-600 mb-6">
                  Over coffee one morning, MJ shared her struggles with fellow horse enthusiasts Danny Upchurch, 
                  Woody Bannister, and Danny Bannister. They realized this wasn't just MJ's problem—it was 
                  an industry-wide challenge that technology could solve.
                </p>
                <p className="text-gray-600">
                  Together, they set out to build the horse management platform they wished existed. After 
                  18 months of development and beta testing with over 1,000 users, BarnBoss has proven its 
                  value: 90% reduction in bookkeeping time and 25% average revenue increase for our users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every feature we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry experts and passionate horse enthusiasts working together to revolutionize equine management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">BarnBoss by the Numbers</h2>
            <p className="text-xl text-gray-300">Our impact on the equine community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '1000+', label: 'Beta Testers', description: 'Trusted users worldwide' },
              { stat: '10,000+', label: 'Horses Managed', description: 'Tracked through our platform' },
              { stat: '90%', label: 'Time Saved', description: 'Reduction in bookkeeping' },
              { stat: '25%', label: 'Revenue Boost', description: 'Average increase for Pro users' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-amber-400 mb-2">{item.stat}</h3>
                <p className="text-xl font-semibold mb-2">{item.label}</p>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the community that's transforming horse management. Download BarnBoss today 
            and experience the difference professional tools make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-semibold shadow-lg">
              Download BarnBoss Now
            </button>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-amber-300 text-amber-700 rounded-xl hover:bg-amber-50 transition-all duration-200 font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;