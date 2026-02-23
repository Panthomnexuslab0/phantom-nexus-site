import { Link } from 'react-router-dom';
import { Diamond, ArrowLeft, RefreshCw, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function Refund() {
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-phantom-green/10 mb-4">
            <RefreshCw className="w-8 h-8 text-phantom-green" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Refund <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-400">
            Fair and transparent refund terms for your peace of mind.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          {/* Quick Summary */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="glass rounded-xl p-4 text-center">
              <CheckCircle className="w-6 h-6 text-phantom-green mx-auto mb-2" />
              <h3 className="text-white font-medium text-sm">7-Day Refund</h3>
              <p className="text-gray-500 text-xs mt-1">Full refund window</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-phantom-cyan mx-auto mb-2" />
              <h3 className="text-white font-medium text-sm">Quick Processing</h3>
              <p className="text-gray-500 text-xs mt-1">5-7 business days</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <XCircle className="w-6 h-6 text-phantom-purple mx-auto mb-2" />
              <h3 className="text-white font-medium text-sm">No Questions</h3>
              <p className="text-gray-500 text-xs mt-1">Hassle-free returns</p>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Eligibility for Refund</h2>
            <p className="text-gray-400 mb-4">
              You are eligible for a full refund if:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>You request a refund within 7 days of purchase</li>
              <li>The premium features have not been extensively used</li>
              <li>You have not violated our Terms of Service</li>
              <li>The request is made from the same account used for purchase</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Non-Refundable Cases</h2>
            <p className="text-gray-400 mb-4">
              Refunds will NOT be issued if:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Refund request is made after 7 days of purchase</li>
              <li>Premium features have been used for more than 48 hours</li>
              <li>Account has been suspended due to policy violations</li>
              <li>Purchase was made through unauthorized channels</li>
              <li>Lifetime plan was purchased and activated</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Refund Process</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-phantom-cyan/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-phantom-cyan font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Submit Request</h3>
                  <p className="text-gray-400 text-sm">
                    Contact us at prince590144@gmail.com with your order ID and reason for refund.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-phantom-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-phantom-purple font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Review</h3>
                  <p className="text-gray-400 text-sm">
                    Our team will review your request within 24-48 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-phantom-green/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-phantom-green font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Refund Issued</h3>
                  <p className="text-gray-400 text-sm">
                    Approved refunds are processed within 5-7 business days to your original payment method.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Refund Timeline</h2>
            <div className="glass rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-gray-400 py-2">Payment Method</th>
                    <th className="text-left text-gray-400 py-2">Processing Time</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3">Credit/Debit Card</td>
                    <td className="py-3">5-7 business days</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">UPI</td>
                    <td className="py-3">3-5 business days</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Net Banking</td>
                    <td className="py-3">5-7 business days</td>
                  </tr>
                  <tr>
                    <td className="py-3">Wallets (Paytm, etc.)</td>
                    <td className="py-3">Instant to 24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Subscription Cancellations</h2>
            <p className="text-gray-400 mb-4">
              For monthly and yearly subscriptions:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>You can cancel anytime from your account settings</li>
              <li>Cancellation takes effect at the end of the current billing period</li>
              <li>No partial refunds for unused time in the current period</li>
              <li>You retain access to premium features until the end of the billing period</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Contact for Refunds</h2>
            <p className="text-gray-400">
              To request a refund, please contact us with the following information:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4 mt-4">
              <li>Order ID or Transaction Reference</li>
              <li>Email address used for purchase</li>
              <li>Date of purchase</li>
              <li>Reason for refund (optional but helpful)</li>
            </ul>
            <p className="text-gray-400 mt-4">
              Email: <a href="mailto:prince590144@gmail.com" className="text-phantom-cyan hover:underline">
                prince590144@gmail.com
              </a>
            </p>
          </section>

          <div className="glass rounded-xl p-6 border border-phantom-green/30 mt-10">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <CheckCircle className="w-5 h-5 text-phantom-green mr-2" />
              Our Commitment
            </h3>
            <p className="text-gray-400 text-sm">
              We stand behind our products. If you&apos;re not satisfied, we&apos;ll make it right. 
              Our 7-day no-questions-asked refund policy ensures you can try our premium features risk-free.
            </p>
          </div>
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
