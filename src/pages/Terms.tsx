import { Link } from 'react-router-dom';
import { Diamond, ArrowLeft } from 'lucide-react';

export default function Terms() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Terms & <span className="gradient-text">Conditions</span>
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400 mb-4">
              By accessing or using Phantom Nexus Labs software, services, or website, you agree to be bound by these 
              Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">2. License and Usage</h2>
            <p className="text-gray-400 mb-4">
              Phantom Nexus Labs grants you a limited, non-exclusive, non-transferable license to use our software 
              for personal, non-commercial purposes. You may not:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Modify, reverse engineer, or decompile our software</li>
              <li>Distribute or resell our software without written permission</li>
              <li>Use our software for illegal or unauthorized purposes</li>
              <li>Remove any copyright or proprietary notices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">3. Premium Features</h2>
            <p className="text-gray-400 mb-4">
              Some features of our software require a premium subscription or one-time purchase. By purchasing 
              premium features, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Pay all applicable fees as described at the time of purchase</li>
              <li>Provide accurate and complete payment information</li>
              <li>Understand that fees are non-refundable except as stated in our Refund Policy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">4. Privacy and Data</h2>
            <p className="text-gray-400 mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your 
              personal information. By using our services, you consent to our data practices as described in the 
              Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h2>
            <p className="text-gray-400 mb-4">
              All content, software, and materials available through Phantom Nexus Labs are the property of 
              Phantom Nexus Labs or its licensors and are protected by copyright, trademark, and other 
              intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-gray-400 mb-4">
              Our software is provided &quot;as is&quot; without warranties of any kind, either express or implied. 
              We do not guarantee that our software will be error-free, secure, or available at all times.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-400 mb-4">
              Phantom Nexus Labs shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages arising from your use of our software or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">8. Changes to Terms</h2>
            <p className="text-gray-400 mb-4">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
              immediately upon posting. Your continued use of our services constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">9. Contact</h2>
            <p className="text-gray-400">
              If you have any questions about these Terms and Conditions, please contact us at:{" "}
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
