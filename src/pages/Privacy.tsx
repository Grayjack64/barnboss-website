import React from 'react';
import { Shield, Lock, Eye, FileText, Users, Globe } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = 'January 15, 2025';

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-green-600">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Your privacy and trust are fundamental to everything we do at BarnBoss.
          </p>
          <p className="text-gray-500">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in transparency and your right to understand how your data is handled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Data Protection',
                description: 'Your horse and business data is encrypted and securely stored with industry-leading security measures.'
              },
              {
                icon: Eye,
                title: 'Transparency',
                description: 'We clearly explain what data we collect, why we collect it, and how we use it to improve your experience.'
              },
              {
                icon: Users,
                title: 'Your Control',
                description: 'You own your data and can export, modify, or delete it at any time. No lock-in, no hidden restrictions.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex items-center mb-8">
              <Lock className="h-8 w-8 text-amber-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h3>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                add horse profiles, or contact our support team. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Account information (name, email address, phone number)</li>
                <li>Horse data (health records, care schedules, photos)</li>
                <li>Billing and payment information (processed securely through third-party providers)</li>
                <li>Usage data and analytics to improve our service</li>
                <li>Communications with our support team</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h3>
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide, maintain, and improve BarnBoss services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Provide and maintain your BarnBoss account and services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Develop new features and improve existing ones</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Sharing and Disclosure</h3>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>With your explicit consent (e.g., sharing horse data with invited stables)</li>
                <li>To trusted service providers who assist in operating our service</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h3>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits and penetration testing</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Employee access controls and training</li>
                <li>GDPR and CCPA compliance measures</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h3>
              <p className="text-gray-600 mb-6">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Access, update, or delete your personal information</li>
                <li>Export your data in a portable format</li>
                <li>Opt out of marketing communications</li>
                <li>Request restriction of processing</li>
                <li>File a complaint with supervisory authorities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex items-center mb-8">
              <FileText className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Terms of Service</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h3>
              <p className="text-gray-600 mb-6">
                By accessing and using BarnBoss, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Description</h3>
              <p className="text-gray-600 mb-6">
                BarnBoss provides horse management software including health tracking, task management, 
                billing, and related services. We reserve the right to modify or discontinue features 
                with reasonable notice.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Responsibilities</h3>
              <p className="text-gray-600 mb-6">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with applicable laws</li>
                <li>Not interfere with or disrupt the service</li>
                <li>Respect intellectual property rights</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscription and Billing</h3>
              <p className="text-gray-600 mb-6">
                Paid subscriptions are billed in advance on a monthly or annual basis. You may cancel 
                your subscription at any time, and cancellation will take effect at the end of your 
                current billing period.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
              <p className="text-gray-600 mb-6">
                BarnBoss shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, 
                goodwill, or other intangible losses.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Termination</h3>
              <p className="text-gray-600 mb-6">
                We may terminate or suspend your account immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Globe className="h-12 w-12 text-amber-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Policies?</h2>
            <p className="text-gray-600 mb-6">
              We're committed to transparency and are happy to answer any questions about how 
              we handle your data and our terms of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@mybarnboss.com"
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-medium"
              >
                Contact Privacy Team
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border-2 border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-all duration-200 font-medium"
              >
                General Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Compliance & Certifications</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-gray-700">GDPR Compliant</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-gray-700">CCPA Compliant</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-gray-700">SOC 2 Type II</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-gray-700">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;