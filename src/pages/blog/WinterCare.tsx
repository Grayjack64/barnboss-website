import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Snowflake, Thermometer, Wind, Droplets, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const WinterCare = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              Horse Health
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Winter Horse Care: Essential Tips for Cold Weather Management
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive strategies to keep your horses healthy, comfortable, and thriving throughout the challenging winter months.
          </p>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>BarnBoss Staff</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>January 4, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="/images/healthcare_sm.png"
            alt="Horses in winter conditions with proper care"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Winter presents unique challenges for horse owners and stable managers. From plummeting 
            temperatures to ice-covered paddocks, the cold season demands careful planning and 
            proactive management to ensure equine health and safety. While horses are naturally 
            equipped to handle cold weather better than heat, proper winter care is essential to 
            prevent common cold-weather ailments and maintain optimal condition.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            This comprehensive guide covers everything you need to know about winter horse care, 
            from nutrition adjustments and shelter requirements to recognizing cold-weather health 
            issues. Whether you're preparing for your first winter with horses or looking to refine 
            your cold-weather management strategies, these evidence-based recommendations will help 
            you keep your horses healthy and comfortable all season long.
          </p>
        </div>

        {/* Understanding Winter Needs */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Snowflake className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Understanding Horses' Winter Needs</h2>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Horses are remarkably well-adapted to cold weather, but understanding their physiological 
            responses to winter conditions is crucial for providing appropriate care.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">🌡️ Temperature Tolerance</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Comfort zone: 18°F to 59°F (-8°C to 15°C)</li>
                <li>• Lower critical temperature varies by coat condition</li>
                <li>• Wind and moisture dramatically affect comfort</li>
                <li>• Body condition impacts cold tolerance</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">🔥 Natural Adaptations</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Winter coat provides excellent insulation</li>
                <li>• Piloerection (hair standing up) traps warm air</li>
                <li>• Increased metabolic rate generates heat</li>
                <li>• Behavioral changes conserve energy</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mt-6">
            <h4 className="font-semibold text-gray-900 mb-3">❄️ Key Factors Affecting Cold Tolerance</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <Wind className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Wind Speed</p>
                <p className="text-xs text-gray-700">Increases heat loss</p>
              </div>
              <div className="text-center">
                <Droplets className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Moisture</p>
                <p className="text-xs text-gray-700">Reduces insulation</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Body Condition</p>
                <p className="text-xs text-gray-700">Fat provides insulation</p>
              </div>
              <div className="text-center">
                <Snowflake className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Coat Quality</p>
                <p className="text-xs text-gray-700">Thickness matters</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nutrition in Winter */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Thermometer className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Winter Nutrition: Fueling the Furnace</h2>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Proper nutrition is the foundation of winter horse care. Horses require additional calories 
            to maintain body temperature, and their nutritional needs change significantly during cold weather.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">🌾 Forage: The Primary Heat Source</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Increase Hay Intake</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Add 2-4 lbs per day for every 10°F below 32°F</li>
                    <li>• Provide hay before severe weather arrives</li>
                    <li>• Offer free-choice hay when possible</li>
                    <li>• Ensure 24-hour access to forage</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Quality Matters</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Choose high-quality, digestible hay</li>
                    <li>• Avoid dusty or moldy forage</li>
                    <li>• Consider hay analysis for nutrient content</li>
                    <li>• Store hay properly to maintain quality</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg mt-4">
                <h5 className="font-medium text-gray-900 mb-2">💡 Pro Tip: Feeding Schedule</h5>
                <p className="text-gray-700 text-sm">
                  Feed the largest hay meal in the evening. Digestion creates internal heat that helps 
                  horses stay warm through the coldest part of the night.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Water Management */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Droplets className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Water: The Critical Winter Challenge</h2>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Maintaining adequate water intake is one of the biggest challenges of winter horse care. 
            Dehydration can lead to serious health issues, including impaction colic.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">💧 Water Requirements and Solutions</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Daily Water Needs</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Minimum 5-10 gallons per day</li>
                    <li>• More needed with dry hay consumption</li>
                    <li>• Lactating mares need 50% more</li>
                    <li>• Working horses require additional water</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Temperature Preferences</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Ideal water temperature: 45-65°F</li>
                    <li>• Horses drink more warm water in winter</li>
                    <li>• Avoid ice-cold water when possible</li>
                    <li>• Monitor intake closely in cold weather</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shelter and Environment */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Shelter: Protection from the Elements</h2>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            While horses can tolerate cold temperatures, they need protection from wind, rain, and snow. 
            Proper shelter is essential for maintaining health and comfort during severe weather.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">🏠 Shelter Requirements</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Essential Features</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Three-sided structure minimum</li>
                    <li>• Opening away from prevailing winds</li>
                    <li>• Minimum 12x12 feet per horse</li>
                    <li>• 8-10 feet minimum height</li>
                    <li>• Good drainage around structure</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Ventilation Considerations</h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Adequate air circulation</li>
                    <li>• Prevent condensation buildup</li>
                    <li>• Avoid completely enclosed spaces</li>
                    <li>• Ridge vents for air exchange</li>
                    <li>• Monitor humidity levels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BarnBoss Integration */}
        <div className="bg-amber-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How BarnBoss Supports Winter Horse Care</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            BarnBoss provides essential tools to help you manage the complexities of winter horse care, 
            from tracking feed adjustments to monitoring health changes throughout the cold season.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌡️ Weather Tracking</h4>
              <p className="text-gray-700 text-sm">
                Monitor temperature changes and adjust feeding schedules automatically based on weather conditions.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🥕 Feed Management</h4>
              <p className="text-gray-700 text-sm">
                Track hay consumption, supplement schedules, and caloric adjustments for winter nutrition needs.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">📊 Health Monitoring</h4>
              <p className="text-gray-700 text-sm">
                Document daily health checks, track body condition changes, and set alerts for winter health risks.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preparing for Success: Your Winter Action Plan</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Successful winter horse care requires preparation, attention to detail, and consistent monitoring. 
            By understanding your horses' individual needs and implementing these evidence-based strategies, 
            you can ensure they not only survive but thrive throughout the cold season.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Start preparing for winter before the cold weather arrives. Assess your facilities, stock up on 
            supplies, and establish routines that will serve you well when temperatures drop. With proper 
            planning and consistent care, winter can be a healthy, comfortable season for your horses.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Master Winter Horse Care with BarnBoss</h3>
          <p className="mb-6">
            Track weather patterns, manage winter feeding schedules, and monitor horse health throughout 
            the cold season with comprehensive care management tools.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Winter Planning
          </button>
        </div>
      </article>
    </div>
  );
};

export default WinterCare; 