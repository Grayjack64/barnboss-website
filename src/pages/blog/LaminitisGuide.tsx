import React from 'react';
import { Calendar, User, Clock, ArrowLeft, AlertTriangle, Shield, Stethoscope, Heart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaminitisGuide = () => {
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
            Understanding Laminitis: Causes, Prevention, and Treatment
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            A comprehensive guide to one of the most common yet serious conditions affecting horses, with expert insights from veterinary specialists.
          </p>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>BarnBoss Staff</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>January 8, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>10 min read</span>
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
            alt="Horse hoof health and laminitis prevention"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Critical Alert */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-400 mt-1 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Critical Information</h3>
              <p className="text-red-700">
                Laminitis is a medical emergency. If you suspect your horse has laminitis, contact your 
                veterinarian immediately. Early intervention is crucial for the best possible outcome.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Laminitis is one of the most feared conditions among horse owners, and for good reason. This 
            painful inflammatory condition affects the sensitive laminae within the hoof, potentially 
            leading to permanent lameness or even requiring euthanasia in severe cases. Despite its 
            serious nature, laminitis is often preventable with proper management and early recognition.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Understanding the causes, recognizing early warning signs, and implementing effective 
            prevention strategies can make the difference between a manageable condition and a 
            life-threatening emergency. This comprehensive guide will equip you with the knowledge 
            needed to protect your horses from this devastating condition.
          </p>
        </div>

        {/* What is Laminitis */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Stethoscope className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is Laminitis?</h2>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Laminitis is the inflammation of the laminae—the sensitive structures that connect the 
            coffin bone to the hoof wall. When these structures become inflamed, they can separate, 
            allowing the coffin bone to rotate or sink within the hoof capsule, a condition known as founder.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">🦴 Anatomical Impact</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Inflammation of sensitive laminae</li>
                <li>• Potential separation of hoof structures</li>
                <li>• Coffin bone rotation or sinking</li>
                <li>• Compromised blood flow to the hoof</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">⚡ Severity Levels</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Acute:</strong> Sudden onset, severe pain</li>
                <li>• <strong>Chronic:</strong> Long-term, recurring episodes</li>
                <li>• <strong>Subclinical:</strong> Mild, often undetected</li>
                <li>• <strong>Founder:</strong> Severe with bone displacement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prevention Strategies */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Prevention: Your Best Defense</h2>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Prevention is far more effective than treatment. These strategies can significantly 
            reduce your horse's risk of developing laminitis.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">🥗 Dietary Management</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Safe Feeding Practices</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Low-sugar, low-starch diet</li>
                    <li>• High-quality forage as base</li>
                    <li>• Limited grain feeding</li>
                    <li>• Consistent feeding times</li>
                    <li>• Gradual diet changes</li>
                    <li>• Regular body condition scoring</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Pasture Management</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Restrict spring/fall grazing</li>
                    <li>• Use grazing muzzles</li>
                    <li>• Avoid stressed grass</li>
                    <li>• Limit early morning turnout</li>
                    <li>• Maintain proper grass height</li>
                    <li>• Test pasture sugar content</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">🏃 Exercise and Weight Management</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Regular Exercise Program</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Consistent daily movement</li>
                    <li>• Appropriate exercise intensity</li>
                    <li>• Turnout on suitable surfaces</li>
                    <li>• Avoid excessive concussion</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Weight Control</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Maintain ideal body condition (4-6/9)</li>
                    <li>• Monitor for cresty neck</li>
                    <li>• Regular weight monitoring</li>
                    <li>• Adjust diet as needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Early Warning Signs */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <Activity className="h-8 w-8 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Recognizing Early Warning Signs</h2>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Early detection is crucial for successful treatment. Learn to recognize these subtle 
            signs that may indicate the onset of laminitis.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">🚶 Movement and Posture</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Reluctance to move or turn</li>
                <li>• "Sawhorse" stance (front feet forward)</li>
                <li>• Shifting weight between feet</li>
                <li>• Shortened stride</li>
                <li>• Difficulty picking up feet</li>
                <li>• Preference for soft ground</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">🌡️ Physical Signs</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Increased digital pulse</li>
                <li>• Heat in the hooves</li>
                <li>• Pain response to hoof testers</li>
                <li>• Rings on hoof wall</li>
                <li>• Bruising on sole</li>
                <li>• Abnormal hoof growth</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-6">
            <h4 className="font-semibold text-red-800 mb-2">Emergency Signs</h4>
            <p className="text-red-700">
              If your horse shows severe lameness, lies down frequently, or refuses to move, 
              this is a medical emergency requiring immediate veterinary attention.
            </p>
          </div>
        </div>

        {/* BarnBoss Integration */}
        <div className="bg-amber-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How BarnBoss Supports Laminitis Prevention</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            BarnBoss provides powerful tools to help you implement and maintain effective laminitis 
            prevention strategies for your horses.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">📊 Health Tracking</h4>
              <p className="text-gray-700 text-sm">
                Monitor body condition, weight changes, and vital signs to detect early risk factors.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🍽️ Diet Management</h4>
              <p className="text-gray-700 text-sm">
                Track feed intake, pasture time, and dietary changes with automated alerts for risk factors.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">📅 Care Scheduling</h4>
              <p className="text-gray-700 text-sm">
                Schedule regular farrier visits, vet checkups, and testing to maintain optimal hoof health.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Knowledge is Your Horse's Best Protection</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Laminitis remains one of the most serious threats to equine health, but it doesn't have to be 
            inevitable. Through careful management, regular monitoring, and prompt action when warning signs 
            appear, you can significantly reduce your horse's risk and ensure they live a comfortable, 
            active life.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Remember that every horse is unique, and what works for one may not work for another. Work closely 
            with your veterinarian and farrier to develop a prevention plan tailored to your horse's specific 
            needs, risk factors, and lifestyle. Early intervention and consistent management are the keys to 
            keeping your horses sound and healthy for years to come.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-green-600 rounded-2xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Protect Your Horses with Better Health Tracking</h3>
          <p className="mb-6">
            Use BarnBoss to monitor risk factors, track health changes, and maintain comprehensive 
            records that support laminitis prevention.
          </p>
          <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Monitoring Today
          </button>
        </div>
      </article>
    </div>
  );
};

export default LaminitisGuide; 