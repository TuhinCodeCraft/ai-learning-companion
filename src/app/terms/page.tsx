import React from "react";
import { BookText, ShieldCheck, CreditCard, Lock, Code, Database, AlertTriangle, Mail, Calendar } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Introduction */}
      <div className="bg-blue-50 rounded-xl p-6 mb-10 border border-blue-100">
        <p className="text-lg text-gray-700">
          Welcome to <span className="font-semibold text-blue-600">Tutoraid</span>, 
          your AI-powered learning companion. By accessing or using our services, 
          you agree to be bound by these terms. Please read them carefully.
        </p>
      </div>

      {/* Terms Sections */}
      <div className="space-y-10">
        <section className="border-b border-gray-200 pb-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Use of the Service</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Our platform provides AI-based tutoring sessions with voice agents, 
                  real-time feedback, and session bookmarking to enhance your learning 
                  experience. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Use the service only for lawful purposes</li>
                  <li>Not disrupt or harm the platform or other users</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <ShieldCheck className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Accounts & Security</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Authentication is securely handled via Clerk with multiple login methods 
                  including Google. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Maintaining account confidentiality</li>
                  <li>All activities under your account</li>
                  <li>Promptly notifying us of unauthorized access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <CreditCard className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Subscriptions & Billing</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  We offer both free and premium service tiers. Our secure third-party 
                  payment processor handles all transactions. You may:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Upgrade, downgrade, or cancel at any time</li>
                  <li>Access billing history through your dashboard</li>
                  <li>Receive refunds as per our cancellation policy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Lock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Intellectual Property</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Converse AI retains all rights to platform content including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>AI voices and tutor personalities</li>
                  <li>Software, algorithms, and system architecture</li>
                  <li>User interface elements and designs</li>
                </ul>
                <p className="mt-3">
                  Unauthorized use may violate copyright, trademark, and other laws.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Database className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Data Storage</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  We utilize Supabase for secure, real-time data storage. Our 
                  <a href="/privacy" className="text-blue-600 hover:underline ml-1">
                    Privacy Policy
                  </a> details how we collect, use, and protect your information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Limitation of Liability</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  While we strive for excellence, Converse AI cannot guarantee:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Specific learning outcomes or results</li>
                  <li>Uninterrupted or error-free service</li>
                  <li>Accuracy of all AI-generated content</li>
                </ul>
                <p className="mt-3">
                  We shall not be liable for any indirect, incidental, or consequential damages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 pb-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Code className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Modifications</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  We reserve the right to modify these terms at any time. Continued use 
                  after changes constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Contact Information</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  For questions about these terms, please contact us at:
                </p>
                <div className="mt-3 p-4 bg-gray-50 rounded-lg inline-block">
                  <a 
                    href="mailto:support@converseai.com" 
                    className="text-blue-600 hover:underline font-medium"
                  >
                    support@converseai.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-gray-200 flex items-center justify-center gap-2 text-gray-500">
        <Calendar className="h-5 w-5" />
        <span>Last updated: June 17, 2025</span>
      </div>
    </div>
  );
};

export default TermsOfService;