import { Diamond, Mail, Shield, Lock, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Premium', href: '#premium' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Download', href: '#' },
    ],
    support: [
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#' },
      { label: 'Help Center', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Refund Policy', href: '/refund' },
    ],
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-phantom-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center space-x-2 mb-4">
              <Diamond className="w-6 h-6 text-phantom-cyan" />
              <span className="text-xl font-bold text-white">
                Phantom<span className="text-phantom-cyan">Nexus</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm mb-6">
              The ultimate Android launcher with voice control, military-grade security, 
              and smart automation.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center px-2 py-1 bg-white/5 rounded">
                <Shield className="w-3 h-3 mr-1 text-phantom-cyan" />
                Secure
              </div>
              <div className="flex items-center px-2 py-1 bg-white/5 rounded">
                <Lock className="w-3 h-3 mr-1 text-phantom-purple" />
                Private
              </div>
              <div className="flex items-center px-2 py-1 bg-white/5 rounded">
                <Smartphone className="w-3 h-3 mr-1 text-phantom-green" />
                Offline
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-phantom-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-phantom-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-phantom-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-sm text-gray-500">
              <Mail className="w-4 h-4 mr-2" />
              <a 
                href="mailto:prince590144@gmail.com" 
                className="hover:text-phantom-cyan transition-colors"
              >
                prince590144@gmail.com
              </a>
            </div>
            
            <p className="text-sm text-gray-500">
              © {currentYear} Phantom Nexus Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
