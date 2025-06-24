import React from 'react';
import { Calendar, User, Clock, ArrowLeft, CheckSquare, Users, Target, Zap, Bell, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaskManagement = () => {
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
            How to Optimize Your Stable Task Management for Maximum Efficiency
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Discover proven strategies to streamline your daily operations and boost productivity using modern task management techniques.
          </p>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>BarnBoss Staff</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>January 12, 2025</span>
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
            src="/images/tasks_sm.png"
            alt="Stable task management and organization"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Running a successful stable operation requires juggling countless daily tasks, from feeding schedules 
            and health monitoring to facility maintenance and staff coordination. Without proper organization, 
            even the most dedicated stable managers can find themselves overwhelmed, leading to missed tasks, 
            inefficient workflows, and ultimately, compromised horse care.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            The key to transforming chaos into efficiency lies in implementing strategic task management systems 
            that work for your specific operation. Whether you're managing a small boarding facility or a large 
            training stable, these proven strategies will help you optimize your workflow, reduce stress, and 
            ensure nothing falls through the cracks.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Impact of Poor Task Management</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">40%</div>
              <p className="text-gray-700">of stable managers report feeling overwhelmed by daily tasks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">25%</div>
              <p className="text-gray-700">increase in efficiency with proper task management systems</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <p className="text-gray-700">reduction in missed or forgotten tasks</p>
            </div>
          </div>
        </div>

        {/* Core Strategies */}
        <div className="space-y-12">
          {/* Strategy 1 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">1. Prioritize with the CARE Method</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Not all stable tasks are created equal. The CARE method helps you categorize and prioritize 
              tasks based on their impact on horse welfare and operational efficiency.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-gray-900 mb-2">🔴 Critical</h4>
                <p className="text-gray-700 text-sm mb-2">Immediate horse health and safety</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Medical treatments</li>
                  <li>• Emergency repairs</li>
                  <li>• Feeding schedules</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-amber-400">
                <h4 className="font-semibold text-gray-900 mb-2">🟡 Acute</h4>
                <p className="text-gray-700 text-sm mb-2">Time-sensitive operations</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Training sessions</li>
                  <li>• Scheduled vet visits</li>
                  <li>• Client meetings</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-gray-900 mb-2">🟢 Routine</h4>
                <p className="text-gray-700 text-sm mb-2">Regular maintenance and care</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Stall cleaning</li>
                  <li>• Grooming</li>
                  <li>• Facility maintenance</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-gray-900 mb-2">🔵 Enhancement</h4>
                <p className="text-gray-700 text-sm mb-2">Improvement and growth activities</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Staff training</li>
                  <li>• Facility upgrades</li>
                  <li>• Process optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strategy 2 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">2. Implement Team-Based Task Distribution</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Effective delegation isn't just about assigning tasks—it's about matching the right people 
              with the right responsibilities based on their skills, experience, and availability.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Role-Based Assignment Strategy</h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Experienced Staff</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Complex medical care</li>
                      <li>• Training supervision</li>
                      <li>• Emergency response</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Regular Staff</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Daily care routines</li>
                      <li>• Feeding schedules</li>
                      <li>• Basic maintenance</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">New/Part-time</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Stall cleaning</li>
                      <li>• Equipment prep</li>
                      <li>• Supervised tasks</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                <h4 className="font-semibold text-gray-900 mb-2">Pro Tip: The 3-2-1 Rule</h4>
                <p className="text-gray-700">
                  For every critical task, ensure 3 people know how to do it, 2 are currently trained, 
                  and 1 is your primary assigned person. This prevents bottlenecks and ensures continuity.
                </p>
              </div>
            </div>
          </div>

          {/* Strategy 3 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">3. Create Efficient Daily Workflows</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Streamlined workflows reduce decision fatigue and ensure consistent, high-quality care. 
              Design your daily routines to minimize travel time and maximize productivity.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Sample Optimized Morning Routine</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 text-amber-800 text-sm font-medium px-2 py-1 rounded">6:00 AM</div>
                    <div>
                      <h5 className="font-medium text-gray-900">Initial Welfare Check</h5>
                      <p className="text-gray-700 text-sm">Quick visual assessment of all horses, note any concerns</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">6:15 AM</div>
                    <div>
                      <h5 className="font-medium text-gray-900">Feeding - Section A</h5>
                      <p className="text-gray-700 text-sm">Start with horses requiring special diets or medications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">6:45 AM</div>
                    <div>
                      <h5 className="font-medium text-gray-900">Turnout - Section A</h5>
                      <p className="text-gray-700 text-sm">While Section A eats, prepare turnout areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 text-purple-800 text-sm font-medium px-2 py-1 rounded">7:00 AM</div>
                    <div>
                      <h5 className="font-medium text-gray-900">Feeding - Section B</h5>
                      <p className="text-gray-700 text-sm">Continue systematic feeding while monitoring Section A</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-gray-900 mb-2">Workflow Optimization Tips</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Group similar tasks together to minimize context switching</li>
                  <li>• Plan routes to minimize walking and maximize efficiency</li>
                  <li>• Prepare materials and equipment the night before</li>
                  <li>• Build in buffer time for unexpected issues</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strategy 4 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Bell className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">4. Leverage Technology and Automation</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Modern stable management software can automate routine tasks, send reminders, and provide 
              real-time visibility into your operation's status. This frees up time for high-value activities 
              like horse care and client relationships.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Automated Reminders</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Feeding schedules and dietary changes</li>
                  <li>• Medication administration times</li>
                  <li>• Veterinary appointment reminders</li>
                  <li>• Farrier scheduling</li>
                  <li>• Equipment maintenance alerts</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Real-Time Tracking</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Task completion status</li>
                  <li>• Staff assignment and availability</li>
                  <li>• Horse location and activity</li>
                  <li>• Inventory levels and reorder points</li>
                  <li>• Billing and payment tracking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strategy 5 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <BarChart3 className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">5. Monitor and Continuously Improve</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              The best task management systems evolve with your operation. Regular analysis of your 
              workflows helps identify bottlenecks, inefficiencies, and opportunities for improvement.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Key Performance Indicators (KPIs) to Track</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Efficiency Metrics</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Average task completion time</li>
                      <li>• Number of overdue tasks</li>
                      <li>• Staff utilization rates</li>
                      <li>• Workflow bottlenecks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Quality Metrics</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Task accuracy and completeness</li>
                      <li>• Client satisfaction scores</li>
                      <li>• Horse health indicators</li>
                      <li>• Safety incident rates</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-gray-900 mb-2">Monthly Review Process</h4>
                <ol className="text-gray-700 space-y-1">
                  <li>1. Analyze task completion data and identify patterns</li>
                  <li>2. Gather feedback from staff on workflow challenges</li>
                  <li>3. Review client feedback and satisfaction scores</li>
                  <li>4. Identify top 3 improvement opportunities</li>
                  <li>5. Implement changes and set success metrics</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* BarnBoss Integration */}
        <div className="bg-amber-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How BarnBoss Streamlines Your Task Management</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            BarnBoss brings all these task management strategies together in one comprehensive platform, 
            designed specifically for equine operations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Smart Task Assignment</h4>
              <p className="text-gray-700 text-sm">
                Automatically assign tasks based on staff skills, availability, and workload balance.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Priority-Based Scheduling</h4>
              <p className="text-gray-700 text-sm">
                Built-in CARE method prioritization ensures critical tasks are never missed.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Mobile Task Updates</h4>
              <p className="text-gray-700 text-sm">
                Staff can update task status, add notes, and attach photos directly from mobile devices.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started: Your 30-Day Implementation Plan</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Week 1: Assessment and Planning</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Document all current tasks and responsibilities</li>
                <li>• Identify pain points and inefficiencies</li>
                <li>• Categorize tasks using the CARE method</li>
                <li>• Map out your ideal daily workflow</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Week 2: System Setup</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Choose and configure your task management system</li>
                <li>• Create task templates for routine activities</li>
                <li>• Set up automated reminders and notifications</li>
                <li>• Train staff on new processes and tools</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Week 3: Pilot Implementation</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Start with one section or team</li>
                <li>• Monitor closely and gather feedback</li>
                <li>• Make adjustments based on real-world usage</li>
                <li>• Document lessons learned</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Week 4: Full Rollout</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Expand to entire operation</li>
                <li>• Establish regular review meetings</li>
                <li>• Set up performance tracking</li>
                <li>• Plan for continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Transform Your Stable Operations Today</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Effective task management isn't just about getting more done—it's about ensuring the highest 
            quality care for your horses while reducing stress for you and your team. By implementing these 
            strategies systematically, you'll create a more efficient, profitable, and enjoyable stable operation.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Remember, the goal isn't perfection from day one. Start with the strategies that address your 
            biggest pain points, and gradually build a comprehensive system that works for your unique operation. 
            Your horses, staff, and clients will all benefit from the improved organization and efficiency.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-green-600 rounded-2xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Stable Management?</h3>
          <p className="mb-6">
            See how BarnBoss can transform your task management and boost your operational efficiency.
          </p>
          <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </article>
    </div>
  );
};

export default TaskManagement; 