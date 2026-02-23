import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown, Shield } from 'lucide-react';

const plans = [
  {
    name: 'FREE',
    description: 'Forever free',
    price: '0',
    period: '',
    icon: Sparkles,
    features: [
      'Basic launcher & app drawer',
      'System monitor (basic)',
      'Ghost Mode (basic toggle)',
      '5 voice commands',
      '3 automation rules',
      'Cyber Mode UI',
    ],
    cta: 'Download Free',
    popular: false,
    borderColor: 'border-gray-600',
    badge: null,
    badgeColor: '',
  },
  {
    name: 'PRO',
    description: 'Most Popular',
    priceMonthly: '49',
    priceYearly: '399',
    periodMonthly: '/month',
    periodYearly: '/year',
    icon: Zap,
    features: [
      'Everything in FREE',
      'Professional Mode',
      'Unlimited voice commands',
      'Custom voice automation',
      'Unlimited automation rules',
      'Privacy Vault (AES-256)',
      'Secure VPN',
      'Advanced threat scanner',
      'Weekly analytics',
    ],
    cta: 'Start 7-Day Free Trial',
    popular: true,
    borderColor: 'border-phantom-cyan',
    badge: 'MOST POPULAR',
    badgeColor: 'bg-orange-500',
  },
  {
    name: 'ELITE',
    description: 'Ultimate Security',
    price: '999',
    period: '/year',
    icon: Crown,
    features: [
      'Everything in PRO',
      'AI-powered threat scoring',
      'Intruder selfie capture',
      'Decoy mode with fake apps',
      'Dual vault (separate vaults)',
      'Real-time analytics',
      'Background permission monitoring',
      'Priority updates',
      'Beta features access',
    ],
    cta: 'Start 7-Day Free Trial',
    popular: false,
    borderColor: 'border-red-500',
    badge: 'ULTIMATE SECURITY',
    badgeColor: 'bg-red-500',
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-phantom-cyan/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-phantom-purple/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Choose Your <span className="gradient-text">Security Level</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Start with 7 days free • Cancel anytime • Secure payments
          </p>
          
          {/* Monthly/Yearly Toggle */}
          <div className="inline-flex items-center bg-white/5 rounded-lg p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !isYearly ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center ${
                isYearly ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                Save 32%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute top-0 right-0 ${plan.badgeColor} text-white text-xs font-bold px-4 py-2 rounded-bl-xl z-10`}>
                  {plan.badge}
                </div>
              )}

              <div className={`h-full p-6 glass border-2 ${plan.borderColor} transition-all duration-300`}>
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                    plan.name === 'FREE' ? 'bg-gray-600' :
                    plan.name === 'PRO' ? 'bg-gradient-to-br from-phantom-cyan to-phantom-purple' :
                    'bg-gradient-to-br from-red-500 to-purple-600'
                  }`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  {plan.name === 'PRO' ? (
                    <>
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl text-gray-400">₹</span>
                        <span className="text-5xl font-bold text-white">
                          {isYearly ? plan.priceYearly : plan.priceMonthly}
                        </span>
                      </div>
                      <span className="text-gray-400">{isYearly ? plan.periodYearly : plan.periodMonthly}</span>
                      {isYearly && (
                        <p className="text-green-400 text-sm mt-1">Just ₹33/month</p>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl text-gray-400">₹</span>
                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                      </div>
                      <span className="text-gray-400">{plan.period || 'Forever'}</span>
                    </>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <Check className={`w-4 h-4 mr-3 flex-shrink-0 mt-0.5 ${
                        plan.name === 'FREE' ? 'text-gray-500' :
                        plan.name === 'PRO' ? 'text-phantom-cyan' :
                        'text-red-400'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.name === 'FREE'
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : plan.name === 'PRO'
                      ? 'bg-gradient-to-r from-phantom-cyan to-phantom-purple text-white hover:opacity-90'
                      : 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:opacity-90'
                  }`}
                >
                  {plan.cta}
                </button>

                {plan.name !== 'FREE' && (
                  <p className="text-center text-xs text-gray-500 mt-3">
                    No charge for 7 days
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-white text-center mb-8">Feature Comparison</h3>
          <div className="glass rounded-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left text-gray-400 py-4 px-6">Feature</th>
                    <th className="text-center text-gray-400 py-4 px-6">FREE</th>
                    <th className="text-center text-phantom-cyan py-4 px-6">PRO</th>
                    <th className="text-center text-red-400 py-4 px-6">ELITE</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { feature: 'Launcher & App Drawer', free: true, pro: true, elite: true },
                    { feature: 'System Monitor', free: 'Basic', pro: 'Full', elite: 'Full' },
                    { feature: 'Voice Commands', free: '5', pro: '20+', elite: '20+' },
                    { feature: 'Custom Voice Automation', free: false, pro: true, elite: true },
                    { feature: 'Automation Rules', free: '3', pro: 'Unlimited', elite: 'Unlimited' },
                    { feature: 'Professional Mode', free: false, pro: true, elite: true },
                    { feature: 'Ghost Mode', free: 'Basic', pro: 'Full', elite: 'Full' },
                    { feature: 'Privacy Vault', free: false, pro: true, elite: true },
                    { feature: 'Dual Vault', free: false, pro: false, elite: true },
                    { feature: 'Secure VPN', free: false, pro: true, elite: true },
                    { feature: 'Threat Scanner', free: 'Basic', pro: 'Advanced', elite: 'AI-Powered' },
                    { feature: 'Security Analytics', free: false, pro: 'Weekly', elite: 'Live' },
                    { feature: 'Intruder Selfie', free: false, pro: false, elite: true },
                    { feature: 'Decoy Mode', free: false, pro: false, elite: true },
                    { feature: 'Permission Monitoring', free: false, pro: false, elite: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-3 px-6 text-gray-300">{row.feature}</td>
                      <td className="py-3 px-6 text-center">
                        {row.free === true ? <Check className="w-4 h-4 text-gray-500 mx-auto" /> :
                         row.free === false ? <span className="text-gray-600">—</span> :
                         <span className="text-gray-400">{row.free}</span>}
                      </td>
                      <td className="py-3 px-6 text-center">
                        {row.pro === true ? <Check className="w-4 h-4 text-phantom-cyan mx-auto" /> :
                         row.pro === false ? <span className="text-gray-600">—</span> :
                         <span className="text-phantom-cyan">{row.pro}</span>}
                      </td>
                      <td className="py-3 px-6 text-center">
                        {row.elite === true ? <Check className="w-4 h-4 text-red-400 mx-auto" /> :
                         row.elite === false ? <span className="text-gray-600">—</span> :
                         <span className="text-red-400">{row.elite}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Trust Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center px-4 py-3 bg-white/5 rounded-xl">
            <Shield className="w-5 h-5 text-phantom-cyan mr-3" />
            <span className="text-sm text-gray-300">
              Secure payments powered by <span className="text-phantom-cyan font-medium">Google Play Billing</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
