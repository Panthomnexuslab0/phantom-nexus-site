import { Link } from 'react-router-dom';
import { Diamond, ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-phantom-darker">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Diamond className="w-6 h-6 text-phantom-cyan" />
              <span className="text-xl font-bold text-white">
                Phantom<span className="text-phantom-cyan">Nexus</span>
              </span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center text-gray-400 hover:text-phantom-cyan transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-phantom-cyan/10 mb-4">
            <Shield className="w-8 h-8 text-phantom-cyan" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-400">
            Your privacy is our top priority. Learn how we protect your data.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Our Privacy Promise</h2>
            <p className="text-gray-400 mb-4">
              At Phantom Nexus Labs, we believe privacy is a fundamental right. Our software is designed 
              with a &quot;privacy-first&quot; approach, ensuring your data stays under your control at all times.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="glass rounded-xl p-4 text-center">
                <Eye className="w-6 h-6 text-phantom-cyan mx-auto mb-2" />
                <h3 className="text-white font-medium text-sm">Zero Tracking</h3>
                <p className="text-gray-500 text-xs mt-1">We don&apos;t track your usage</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <Lock className="w-6 h-6 text-phantom-purple mx-auto mb-2" />
                <h3 className="text-white font-medium text-sm">Encrypted</h3>
                <p className="text-gray-500 text-xs mt-1">Military-grade encryption</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <Database className="w-6 h-6 text-phantom-pink mx-auto mb-2" />
                <h3 className="text-white font-medium text-sm">On-Device</h3>
                <p className="text-gray-500 text-xs mt-1">Data never leaves your phone</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-gray-400 mb-4">
              We collect minimal information necessary to provide our services:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li><strong>Account Information:</strong> Email address for account creation and communication</li>
              <li><strong>Payment Information:</strong> Processed securely through Razorpay (we don&apos;t store card details)</li>
              <li><strong>Usage Analytics:</strong> Anonymous data to improve our software (opt-out available)</li>
              <li><strong>Support Requests:</strong> Information you provide when contacting support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">What We DON&apos;T Collect</h2>
            <p className="text-gray-400 mb-4">
              We are committed to NOT collecting:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Personal contacts or call logs</li>
              <li>App usage patterns or browsing history</li>
              <li>Location data (unless explicitly enabled by you)</li>
              <li>Photos, videos, or personal files</li>
              <li>Biometric data (fingerprints are stored only on your device)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-400 mb-4">
              Your information is used solely for:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Providing and maintaining our services</li>
              <li>Processing payments and preventing fraud</li>
              <li>Communicating updates and support responses</li>
              <li>Improving software performance and features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-gray-400 mb-4">
              We implement industry-standard security measures:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 for data in transit</li>
              <li>Regular security audits and penetration testing</li>
              <li>PCI-DSS compliant payment processing</li>
              <li>ISO 27001 certified data centers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-gray-400 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-400 mb-4">
              We use trusted third-party services:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li><strong>Razorpay:</strong> Payment processing (PCI-DSS compliant)</li>
              <li><strong>Formspree:</strong> Contact form handling</li>
              <li><strong>Google Play:</strong> App distribution</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:prince590144@gmail.com" className="text-phantom-cyan hover:underline">
                prince590144@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Phantom Nexus Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
