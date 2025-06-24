import React from 'react';
import { Calendar, User, Clock, ArrowLeft, AlertTriangle, Heart, Thermometer, Eye, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const ColiSigns = () => {
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
            <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
              Horse Health
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            5 Early Warning Signs of Colic Every Horse Owner Should Know
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Colic is one of the most serious conditions affecting horses. Learn to identify the early warning signs that could save your horse's life.
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
            src="/images/healthcare_sm.png"
            alt="Horse health monitoring"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Alert Box */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-400 mt-1 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Alert</h3>
              <p className="text-red-700">
                If you notice any combination of these signs, contact your veterinarian immediately. 
                Colic can be life-threatening and requires prompt professional attention.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Colic is the leading cause of death in horses, accounting for over 30% of equine fatalities. 
            The term "colic" refers to abdominal pain, which can range from mild discomfort to severe, 
            life-threatening conditions. Early detection is crucial for successful treatment and can mean 
            the difference between life and death for your horse.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            As a horse owner, trainer, or stable manager, understanding these warning signs empowers you 
            to act quickly when every minute counts. Let's explore the five most critical early warning 
            signs that every equine caretaker should recognize.
          </p>
        </div>

        {/* Warning Signs */}
        <div className="space-y-12">
          {/* Sign 1 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Activity className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">1. Restlessness and Pawing</h2>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              One of the earliest signs of colic is unusual restlessness. Your horse may begin pawing 
              at the ground repeatedly, shifting weight from foot to foot, or appearing generally 
              uncomfortable. This behavior often starts subtly but becomes more pronounced as discomfort increases.
            </p>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-400 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">What to Look For:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Excessive pawing at the ground or stall floor</li>
                <li>• Inability to stand still</li>
                <li>• Frequent position changes</li>
                <li>• Pacing or circling in the stall</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              <strong>BarnBoss Tip:</strong> Use our behavior tracking feature to log unusual 
              activity patterns. This data can help your veterinarian understand the progression 
              of symptoms when you call for help.
            </p>
          </div>

          {/* Sign 2 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">2. Looking at or Biting the Flank</h2>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Horses experiencing abdominal pain will often turn their heads toward their sides, 
              appearing to "look at" their belly. This may progress to nipping or biting at their 
              flanks as the pain intensifies.
            </p>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-400 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Progressive Behaviors:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Turning head toward belly</li>
                <li>• Curling upper lip (flehmen response)</li>
                <li>• Gentle nipping at sides</li>
                <li>• Aggressive biting at flanks (severe cases)</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              This behavior indicates the horse is trying to identify and address the source of 
              their discomfort. The intensity of this behavior often correlates with the severity 
              of the colic episode.
            </p>
          </div>

          {/* Sign 3 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">3. Changes in Vital Signs</h2>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Monitoring vital signs is crucial for early colic detection. Even before obvious 
              behavioral changes occur, a horse's heart rate, respiratory rate, and temperature 
              may begin to deviate from normal ranges.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Normal Ranges:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Heart Rate: 28-44 beats/minute</li>
                  <li>• Respiratory Rate: 8-16 breaths/minute</li>
                  <li>• Temperature: 99-101°F (37.2-38.3°C)</li>
                  <li>• Gut Sounds: Regular, audible</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-3">Warning Signs:</h4>
                <ul className="text-red-700 space-y-2">
                                     <li>• Elevated heart rate (&gt;50 bpm)</li>
                  <li>• Rapid, shallow breathing</li>
                  <li>• Fever or abnormally low temp</li>
                  <li>• Absent or decreased gut sounds</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700">
              <strong>Pro Tip:</strong> Learn to check your horse's vital signs regularly when 
              they're healthy, so you can quickly identify abnormal readings during a potential colic episode.
            </p>
          </div>

          {/* Sign 4 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Thermometer className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">4. Sweating and Physical Distress</h2>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              As colic progresses, horses often begin to sweat, even in cool weather. This sweating 
              typically starts around the neck and shoulders and may spread across the body as pain 
              and stress levels increase.
            </p>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-400 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Physical Signs to Monitor:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Patchy or excessive sweating</li>
                <li>• Muscle trembling or twitching</li>
                <li>• Rapid or labored breathing</li>
                <li>• Pale or dark gum color</li>
                                 <li>• Prolonged capillary refill time (&gt;2 seconds)</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              These physical manifestations indicate that the horse's body is under significant 
              stress. The combination of sweating with other colic signs requires immediate 
              veterinary attention.
            </p>
          </div>

          {/* Sign 5 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">5. Lying Down Frequently or Rolling</h2>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Perhaps the most concerning sign is when a horse repeatedly lies down and gets up, 
              or worse, attempts to roll. While horses do lie down normally, frequent position 
              changes combined with other symptoms strongly suggest colic.
            </p>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
              <h4 className="font-semibold text-red-800 mb-2">Critical Warning:</h4>
              <p className="text-red-700">
                <strong>Never allow a colicking horse to roll.</strong> Rolling can cause the 
                intestines to twist (volvulus), creating a life-threatening surgical emergency. 
                Keep the horse walking if possible until veterinary help arrives.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-amber-400">
              <h4 className="font-semibold text-gray-900 mb-2">Management Strategy:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Keep the horse moving with gentle hand-walking</li>
                <li>• Remove all feed and water</li>
                <li>• Stay calm and speak soothingly</li>
                <li>• Monitor continuously until help arrives</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prevention Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prevention is the Best Medicine</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Feeding Management</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Maintain consistent feeding schedules</li>
                <li>• Provide high-quality forage</li>
                <li>• Make dietary changes gradually</li>
                <li>• Ensure adequate water intake</li>
                <li>• Avoid feeding on the ground in sandy areas</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Exercise & Environment</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Provide regular exercise and turnout</li>
                <li>• Minimize stress and routine changes</li>
                <li>• Maintain proper dental care</li>
                <li>• Follow regular deworming protocols</li>
                <li>• Monitor for signs of gastric ulcers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BarnBoss Integration */}
        <div className="bg-amber-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How BarnBoss Helps</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            BarnBoss's health tracking features make it easier than ever to monitor your horses 
            for early signs of colic and other health issues:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Behavior Tracking</h4>
              <p className="text-gray-700 text-sm">
                Log unusual behaviors and patterns to identify early warning signs.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Vital Signs Log</h4>
              <p className="text-gray-700 text-sm">
                Record and track heart rate, temperature, and other vital signs over time.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Vet Communication</h4>
              <p className="text-gray-700 text-sm">
                Share detailed health records instantly with your veterinarian during emergencies.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Remember: When in Doubt, Call Your Vet</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Colic is a serious condition that requires immediate professional attention. While these 
            early warning signs can help you identify potential problems, they should never replace 
            professional veterinary diagnosis and treatment. Trust your instincts – if something 
            seems wrong with your horse, don't hesitate to contact your veterinarian.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Early detection and prompt treatment are the keys to successful colic management. By 
            staying vigilant and knowing what to look for, you can help ensure the best possible 
            outcome for your horse's health and wellbeing.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-green-600 rounded-2xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Start Tracking Your Horse's Health Today</h3>
          <p className="mb-6">
            Use BarnBoss to monitor vital signs, track behaviors, and maintain comprehensive 
            health records for all your horses.
          </p>
          <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Try BarnBoss Free
          </button>
        </div>
      </article>
    </div>
  );
};

export default ColiSigns; 