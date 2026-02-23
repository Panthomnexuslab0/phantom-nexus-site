import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Eye, Lock, LayoutDashboard, Hand, Palette, Star, Check } from 'lucide-react';

const premiumFeatures = [
  {
    icon: Mic,
    title: 'Custom Voice Commands',
    description: 'Create your own voice-activated automations. "Office Mode" → WiFi on + Open Gmail + Volume 50%. Unlimited custom commands.',
    image: '/ai-assistant.jpg',
    badge: 'PRO',
    highlight: true,
    plan: 'pro',
  },
  {
    icon: Eye,
    title: 'Ghost Mode Advanced',
    description: 'Hide apps with fake decoy home screen. Multiple decoy screens with fake apps. Biometric unlock required.',
    image: '/ghost-mode.jpg',
    badge: 'PRO',
    highlight: false,
    plan: 'pro',
  },
  {
    icon: Lock,
    title: 'Privacy Vault',
    description: 'AES-256 encrypted vault to hide apps and files. Biometric + PIN protection. Your secrets stay secret.',
    image: '/privacy-vault.jpg',
    badge: 'PRO',
    highlight: false,
    plan: 'pro',
  },
  {
    icon: LayoutDashboard,
    title: 'Professional Mode',
    description: 'Switch to clean corporate UI perfect for work. "Device Status: Active" instead of "SYSTEM OPERATIONAL".',
    image: '/adaptive-widgets.jpg',
    badge: 'PRO',
    highlight: false,
    plan: 'pro',
  },
  {
    icon: Hand,
    title: 'Advanced Automation',
    description: 'Unlimited automation rules with multi-step actions. Time-based, app-based, and battery-level triggers.',
    image: '/gesture-control.jpg',
    badge: 'PRO',
    highlight: false,
    plan: 'pro',
  },
  {
    icon: Palette,
    title: 'Complete Customization',
    description: 'Full theme customization, icon packs, grid sizes, animations. Make it truly yours.',
    image: '/neon-theme.jpg',
    badge: 'PRO',
    highlight: false,
    plan: 'pro',
  },
];

const eliteFeatures = [
  {
    icon: Lock,
    title: 'Intruder Selfie Capture',
    description: 'Wrong PIN or biometric? Front camera captures a photo. Track unauthorized access attempts.',
  },
  {
    icon: Eye,
    title: 'Decoy Mode',
    description: 'Fake home screen with fake apps. Intruders see a completely different set of apps.',
  },
  {
    icon: Lock,
    title: 'Dual Vault',
    description: 'Two separate encrypted vaults. Keep work and personal data completely separate.',
  },
  {
    icon: Star,
    title: 'AI Threat Scoring',
    description: 'Behavior-based risk analysis. AI-powered threat detection for all your apps.',
  },
];

export default function PremiumFeatures() {
  const [activeTab, setActiveTab] = useState<'pro' | 'elite'>('pro');

  return (
    <section id="premium" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-phantom-cyan/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-phantom-purple/10 border border-phantom-purple/30 rounded-full mb-6">
            <Star className="w-4 h-4 text-phantom-purple mr-2" />
            <span className="text-sm text-phantom-purple font-medium">Premium Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Unlock <span className="gradient-text">Full Power</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Core launcher is free forever. Upgrade to PRO or ELITE to unlock advanced features 
            and take your Android experience to the next level.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('pro')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'pro'
                  ? 'bg-gradient-to-r from-phantom-cyan to-phantom-purple text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PRO Features
            </button>
            <button
              onClick={() => setActiveTab('elite')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'elite'
                  ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ELITE Security
            </button>
          </div>
        </div>

        {/* PRO Features Grid */}
        {activeTab === 'pro' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl ${
                  feature.highlight ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className={`h-full glass border ${
                  feature.highlight 
                    ? 'border-phantom-cyan/50 neon-glow' 
                    : 'border-white/10 hover:border-phantom-purple/30'
                } transition-all duration-300`}>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-phantom-darker via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-phantom-cyan text-phantom-darker">
                      {feature.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <feature.icon className="w-5 h-5 mr-2 text-phantom-cyan" />
                      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ELITE Features */}
        {activeTab === 'elite' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-2xl p-8 border border-red-500/30">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                ELITE Security Suite
              </h3>
              <p className="text-gray-400 text-center mb-8">
                Maximum security for maximum protection. Everything in PRO, plus advanced security features.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {eliteFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-white/5 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-gray-300">Plus everything in PRO plan</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Does it work offline?',
                a: 'Yes! Voice commands and all core features work 100% offline. Only premium verification requires internet once.',
              },
              {
                q: 'Is my data private?',
                a: 'Absolutely. We don\'t collect, store, or share ANY of your data. Everything stays on your device.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. Cancel your subscription anytime in Google Play Store. No questions asked.',
              },
              {
                q: 'What\'s the difference between PRO and ELITE?',
                a: 'PRO unlocks productivity features. ELITE adds advanced security like AI threats and intruder capture.',
              },
            ].map((faq, i) => (
              <div key={i} className="glass rounded-xl p-6 border border-white/5">
                <h4 className="text-white font-medium mb-2">{faq.q}</h4>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
