import { useState } from 'react';
import { ArrowRight, Shield, Lock, Zap, Check, Mic, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const features = [
    { icon: Mic, text: 'Voice Control' },
    { icon: Shield, text: 'Military Security' },
    { icon: Lock, text: '100% Private' },
    { icon: Zap, text: 'Lightning Fast' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-phantom-cyan/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-phantom-purple/20 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-phantom-cyan/10 border border-phantom-cyan/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-phantom-cyan rounded-full animate-pulse mr-2" />
              <span className="text-sm text-phantom-cyan font-medium">v3.0 Now Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The Ultimate{' '}
              <span className="gradient-text">Android</span>
              <br />
              Launcher
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Voice-controlled, privacy-first Android launcher with military-grade security, 
              AI automation, and dual UI modes. Works 100% offline.
            </p>

            {/* Key Features List */}
            <div className="space-y-3 mb-8">
              {[
                '🎙️ 20+ Voice Commands (Works Offline)',
                '🔒 Privacy Vault with AES-256 Encryption',
                '🎨 Cyber Mode + Professional Mode',
                '📊 Real-time System Monitor',
                '⚡ Smart Automation Engine',
              ].map((item, i) => (
                <div key={i} className="flex items-center text-gray-300">
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Waitlist Form */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-phantom-cyan transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-phantom-cyan to-phantom-purple text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  {submitted ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Join 10,000+ users. No spam, unsubscribe anytime.
              </p>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#pricing"
                className="px-6 py-3 bg-phantom-cyan/10 border border-phantom-cyan/50 text-phantom-cyan rounded-lg hover:bg-phantom-cyan/20 transition-colors flex items-center"
              >
                <Smartphone className="w-4 h-4 mr-2" />
                Download Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#features"
                className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore Features
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-400">
                  <feature.icon className="w-4 h-4 mr-2 text-phantom-cyan" />
                  {feature.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Phone Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <img
                src="/hero-phone.jpg"
                alt="Phantom Nexus Launcher"
                className="w-full max-w-md mx-auto rounded-2xl neon-glow"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-phantom-purple/30 rounded-full blur-[60px]" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-phantom-cyan/30 rounded-full blur-[60px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
