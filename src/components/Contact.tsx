import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageSquare,
  Send,
  Check,
  User,
  AtSign,
  HelpCircle,
  AlertCircle,
} from 'lucide-react';

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

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/prince590144@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: `[Phantom Nexus] ${formData.subject}`,
            message: formData.message,
            _template: 'table',
            _captcha: 'false',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      setError(
        'Something went wrong. Please try again or email us directly at prince590144@gmail.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  return (
    <section id="contact" className="py-24 relative">
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
            Send us a message and we’ll respond within 24–48 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE INFO */}
          <div className="glass rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-phantom-cyan mr-3 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a
                    href="mailto:prince590144@gmail.com"
                    className="text-phantom-cyan hover:underline"
                  >
                    prince590144@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare className="w-5 h-5 text-phantom-purple mr-3 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Support</h4>
                  <p className="text-gray-400 text-sm">
                    24/7 priority support for ELITE users
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <HelpCircle className="w-5 h-5 text-phantom-green mr-3 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Help Center</h4>
                  <p className="text-gray-400 text-sm">Coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-10">
                <Check className="w-10 h-10 text-phantom-green mx-auto mb-4" />
                <p className="text-white font-semibold">Message Sent!</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg mb-4 flex">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-phantom-cyan to-phantom-purple text-white rounded-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
