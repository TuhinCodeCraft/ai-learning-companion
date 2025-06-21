import React from "react";
import { Shield, Database, Lock, Cookie, Clock, Mail, RefreshCw, User, Calendar } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold text-indigo-600">Tutoraid</span>, we're committed to protecting your personal information and being transparent about our data practices.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="space-y-12">
        <section className="border-b border-gray-200 pb-10">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-indigo-100 rounded-xl">
              <User className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="prose prose-indigo max-w-none">
                <p>To provide our services, we collect:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>Account information:</strong> Name, email, and authentication provider details</li>
                  <li><strong>Learning data:</strong> Session history, bookmarks, and preferences</li>
                  <li><strong>Usage analytics:</strong> Pages visited, time spent, and device information</li>
                  <li><strong>Payment details:</strong> For subscribers (processed securely by our payment provider)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-10">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Data</h2>
              <div className="prose prose-blue max-w-none">
                <p>Your information enables us to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Create personalized AI tutoring experiences</li>
                  <li>Save and recall your learning progress</li>
                  <li>Process payments and maintain subscriptions</li>
                  <li>Improve platform functionality and security</li>
                  <li>Develop new features based on usage patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-10">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Services</h2>
              <div className="prose prose-purple max-w-none">
                <p>We partner with trusted providers for essential services:</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900">Authentication</h3>
                    <p className="text-sm text-gray-600 mt-1">Clerk - Secure user authentication</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900">Data Storage</h3>
                    <p className="text-sm text-gray-600 mt-1">Supabase - Encrypted database</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900">Payments</h3>
                    <p className="text-sm text-gray-600 mt-1">Stripe - PCI-compliant processing</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900">Analytics</h3>
                    <p className="text-sm text-gray-600 mt-1">Google Analytics - Usage insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-10">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-amber-100 rounded-xl">
              <Cookie className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies & Tracking</h2>
              <div className="prose prose-amber max-w-none">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Maintain secure user sessions</li>
                  <li>Remember your preferences</li>
                  <li>Analyze platform usage patterns</li>
                </ul>
                <p className="mt-4">
                  You can manage cookies through your browser settings or our cookie consent tool.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-10">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-green-100 rounded-xl">
              <Lock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <div className="prose prose-green max-w-none">
                <p>We implement robust security measures including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>End-to-end encryption for all data transmissions</li>
                  <li>Secure authentication protocols</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Role-based access controls</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-10">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-gray-100 rounded-xl">
              <Clock className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
              <div className="prose prose-gray max-w-none">
                <p>We retain your information:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>While your account remains active</li>
                  <li>For legal or regulatory compliance when required</li>
                  <li>In anonymized form for analytics after account deletion</li>
                </ul>
                <p className="mt-4">
                  You may request account deletion at any time through your settings or by contacting us.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-10">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-red-100 rounded-xl">
              <Mail className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Privacy Rights</h2>
              <div className="prose prose-red max-w-none">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Access and receive a copy of your data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium">To exercise these rights:</p>
                  <a 
                    href="mailto:privacy@tutoraid.com" 
                    className="text-indigo-600 hover:underline font-medium inline-block mt-2"
                  >
                    privacy@tutoraid.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start gap-5">
            <div className="p-3 bg-blue-100 rounded-xl">
              <RefreshCw className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Policy Updates</h2>
              <div className="prose prose-blue max-w-none">
                <p>
                  We may update this policy to reflect changes in our practices or legal requirements. 
                  Significant changes will be communicated through:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Email notifications to registered users</li>
                  <li>In-platform announcements</li>
                  <li>Updated revision date on this page</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-14 pt-6 border-t border-gray-200 flex flex-col items-center">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <Calendar className="h-5 w-5" />
          <span>Last updated: June 17, 2025</span>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tutoraid. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;