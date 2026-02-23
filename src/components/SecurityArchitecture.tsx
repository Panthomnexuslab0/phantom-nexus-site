import { Shield, Lock, Fingerprint, Radar, Server, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function SecurityArchitecture() {
  const items = [
    {
      icon: Shield,
      title: "Zero-Tracking Policy",
      desc: "No telemetry. No background analytics. No hidden data sync. Phantom Nexus operates fully offline unless explicitly enabled.",
    },
    {
      icon: Lock,
      title: "AES-256 + Hardware Key Binding",
      desc: "Vault encryption keys are bound to device hardware. Even APK extraction cannot decrypt stored data.",
    },
    {
      icon: Fingerprint,
      title: "Biometric Isolation Layer",
      desc: "Biometric authentication handled via secure OS enclave. Data never exposed to app memory.",
    },
    {
      icon: Radar,
      title: "Behavioral Threat Engine",
      desc: "Monitors abnormal app behavior, permission abuse, and background activity in real time.",
    },
    {
      icon: Server,
      title: "Offline AI Security Model",
      desc: "Threat detection model runs locally. No cloud dependency. No external API calls.",
    },
    {
      icon: EyeOff,
      title: "Anti-Forensic Ghost Mode",
      desc: "Launcher environment can mask selected apps with decoy screens. No visible traces in recent apps.",
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Advanced Security <span className="text-cyan-400">Architecture</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built with a privacy-first design. Engineered to resist tracking,
            reverse engineering, and unauthorized access.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all"
            >
              <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
