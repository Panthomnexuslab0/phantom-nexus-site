import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Check, User, AtSign, HelpCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Using FormSubmit - reliable form backend
      const formSubmitUrl = 'https://formsubmit.co/ajax/prince590144@gmail.com';
      
      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `[Phantom Nexus] ${formData.subject}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success === "true") {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again or email us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Network error. Please email us directly at prince590144@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-phantom-cyan/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-phantom-cyan/10 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond within 24-48 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-phantom-cyan/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-phantom-cyan" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:prince590144@gmail.com" 
                      className="text-phantom-cyan hover:underline transition-colors"
                    >
                      prince590144@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We usually respond within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-phantom-purple/10 flex items-center justify-center mr-4">
                    <MessageSquare className="w-5 h-5 text-phantom-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Support</h4>
                    <p className="text-gray-400">24/7 Priority Support for ELITE Users</p>
                    <p className="text-sm text-gray-500 mt-1">Standard support for FREE/PRO users</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-phantom-green/10 flex items-center justify-center mr-4">
                    <HelpCircle className="w-5 h-5 text-phantom-green" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Help Center</h4>
                    <p className="text-gray-400">Find answers to common questions</p>
                    <p className="text-sm text-gray-500 mt-1">Coming soon</p>
                  </div>
                </div>
              </div>

              {/* Direct Email CTA */}
              <div className="mt-8 p-4 bg-phantom-cyan/10 rounded-xl border border-phantom-cyan/30">
                <p className="text-sm text-gray-300 mb-2">Prefer to email directly?</p>
                <a 
                  href="mailto:prince590144@gmail.com?subject=Phantom%20Nexus%20Inquiry"
                  className="inline-flex items-center text-phantom-cyan hover:underline"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Click here to open email
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 mb-4">Trusted by users worldwide</p>
                <div className="flex flex-wrap gap-3">
                  {['No Data Collection', 'AES-256 Encryption', 'Offline First'].map((badge, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-phantom-green/20 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-phantom-green" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-400 text-sm">{error}</p>
                        <a 
                          href="mailto:prince590144@gmail.com" 
                          className="text-phantom-cyan text-sm hover:underline mt-1 inline-block"
                        >
                          Email us directly instead →
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-phantom-cyan transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email *</label>
                      <div className="relative">
                        <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-phantom-cyan transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-phantom-cyan transition-colors appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="bg-phantom-darker">Select a subject</option>
                      <option value="General Inquiry" className="bg-phantom-darker">General Inquiry</option>
                      <option value="Technical Support" className="bg-phantom-darker">Technical Support</option>
                      <option value="Billing Question" className="bg-phantom-darker">Billing Question</option>
                      <option value="Feature Request" className="bg-phantom-darker">Feature Request</option>
                      <option value="Complaint" className="bg-phantom-darker">Complaint</option>
                      <option value="Business Partnership" className="bg-phantom-darker">Business Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-phantom-cyan transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-phantom-cyan to-phantom-purple text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-phantom-cyan hover:underline">Privacy Policy</a>
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
