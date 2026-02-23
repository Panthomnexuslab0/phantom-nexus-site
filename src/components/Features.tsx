import { motion } from 'framer-motion';
import { Mic, Shield, Zap, RefreshCw, LayoutDashboard, Lock, Smartphone, Eye } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voice Command Engine',
    description: 'Control your phone hands-free with 20+ voice commands. Works 100% offline. "Open WhatsApp", "Flashlight on", "Call Mom" - all hands-free.',
    color: 'from-phantom-cyan to-blue-600',
  },
  {
    icon: LayoutDashboard,
    title: 'Dual UI Modes',
    description: 'Switch between Cyber Mode (matrix green glow) and Professional Mode (clean corporate UI). Perfect for both tech enthusiasts and business users.',
    color: 'from-phantom-purple to-pink-600',
  },
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'AES-256 encryption, biometric unlock, intruder selfie capture, and decoy mode. Your privacy is our mission.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Eye,
    title: 'Ghost Mode',
    description: 'Hide selected apps from your launcher with a fake decoy home screen. Biometric unlock required. Cannot be bypassed.',
    color: 'from-gray-500 to-gray-700',
  },
  {
    icon: Zap,
    title: 'Real-Time System Monitor',
    description: 'Live CPU, RAM, battery, and network monitoring with real data from your device. No fake numbers - all actual system stats.',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: RefreshCw,
    title: 'Smart Automation',
    description: 'Create powerful automations without coding. "Bedtime" → DND on + Brightness 20%. "Work" → WiFi on + Email + Calendar.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Lock,
    title: 'Privacy Vault',
    description: 'AES-256 encrypted vault to hide apps and files. Biometric + PIN protection. Dual vault support for complete separation.',
    color: 'from-phantom-pink to-rose-600',
  },
  {
    icon: Smartphone,
    title: 'Built-in VPN',
    description: 'Secure VPN protection built right in. No third-party apps needed. Toggle from home screen with kill switch protection.',
    color: 'from-indigo-500 to-purple-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-phantom-purple/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need in an Android launcher. Voice control, military-grade security, 
            and smart automation - all in one app.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl card-hover">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
