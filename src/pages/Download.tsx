import React from 'react';
import { Smartphone, Monitor, Download as DownloadIcon, Star, CheckCircle, QrCode } from 'lucide-react';

const Download = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get BarnBoss on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-green-600">
                Your Device Today
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Download BarnBoss and start managing your horses with professional-grade tools. 
              Available on all your favorite devices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* App Store Buttons */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Download for Mobile</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors group"
                  >
                    <div className="bg-white p-1 rounded">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors group"
                  >
                    <div className="bg-white p-1 rounded">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs">Get it on</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Web App */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Access on Desktop</h2>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-lg">
                      <Monitor className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Web Application</h3>
                      <p className="text-gray-600 text-sm">Access BarnBoss directly from your browser</p>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-medium">
                      Launch App
                    </button>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Quick Download</h2>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <QrCode className="h-16 w-16 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Scan to Download</h3>
                      <p className="text-gray-600 text-sm">
                        Point your phone's camera at the QR code to quickly access the download page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Screenshots */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="BarnBoss mobile app screenshot"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/3662870/pexels-photo-3662870.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="BarnBoss dashboard"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.pexels.com/photos/3663912/pexels-photo-3663912.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="BarnBoss task management"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=400&q=80"
                    alt="BarnBoss health tracking"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-50/50 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need in One App
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BarnBoss brings professional horse management to your fingertips with an intuitive, 
              powerful mobile and desktop experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'Mobile-First Design',
                description: 'Optimized for on-the-go management with offline capabilities and instant sync.',
                features: ['Offline mode', 'Push notifications', 'Camera integration', 'GPS tracking']
              },
              {
                icon: Monitor,
                title: 'Desktop Power',
                description: 'Full-featured desktop experience for comprehensive reporting and management.',
                features: ['Advanced reporting', 'Bulk operations', 'Export capabilities', 'Multi-screen support']
              },
              {
                icon: CheckCircle,
                title: 'Cross-Platform Sync',
                description: 'Seamless synchronization across all your devices with real-time updates.',
                features: ['Real-time sync', 'Cloud backup', 'Multi-device access', 'Secure encryption']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Ratings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by Users</h2>
            <p className="text-xl text-gray-600">See what our community is saying about BarnBoss</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4.9/5</h3>
              <p className="text-gray-600 mb-2">App Store Rating</p>
              <p className="text-sm text-gray-500">Based on 1,247 reviews</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4.8/5</h3>
              <p className="text-gray-600 mb-2">Google Play Rating</p>
              <p className="text-sm text-gray-500">Based on 892 reviews</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <DownloadIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50K+</h3>
              <p className="text-gray-600 mb-2">Downloads</p>
              <p className="text-sm text-gray-500">And growing every day</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">System Requirements</h2>
            <p className="text-xl text-gray-600">Make sure your device is compatible with BarnBoss</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Smartphone className="h-5 w-5 mr-2 text-amber-600" />
                Mobile Requirements
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">iOS</h4>
                  <p className="text-gray-600 text-sm">iOS 14.0 or later, iPhone 8 or newer</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Android</h4>
                  <p className="text-gray-600 text-sm">Android 8.0 (API level 26) or higher</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Storage</h4>
                  <p className="text-gray-600 text-sm">Minimum 100MB free space</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Monitor className="h-5 w-5 mr-2 text-amber-600" />
                Desktop Requirements
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Browsers</h4>
                  <p className="text-gray-600 text-sm">Chrome 90+, Firefox 88+, Safari 14+, Edge 90+</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Internet</h4>
                  <p className="text-gray-600 text-sm">Stable internet connection required</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Resolution</h4>
                  <p className="text-gray-600 text-sm">Minimum 1024x768 screen resolution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Horse Management?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join thousands of horse owners and professionals who trust BarnBoss for their daily operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold shadow-lg flex items-center justify-center group">
              <DownloadIcon className="mr-2 h-5 w-5" />
              Download Now - Free
            </button>
            <a
              href="/pricing"
              className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all duration-200 font-semibold"
            >
              View Pricing Plans
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;