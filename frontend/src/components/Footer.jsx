import React from 'react';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-section border-t border-border-light py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-strong flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-text-primary">Skofie</span>
            </div>
            <p className="text-text-secondary body-medium mb-4">
              Platform edukasi finansial digital yang membantu memahami dunia Web3 dan cryptocurrency dengan cara yang mudah dan modern.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-full hover:bg-bg-card transition-colors" aria-label="Email">
                <Mail size={20} className="text-text-secondary" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-bg-card transition-colors" aria-label="Instagram">
                <Instagram size={20} className="text-text-secondary" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-bg-card transition-colors" aria-label="Twitter">
                <Twitter size={20} className="text-text-secondary" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-bg-card transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} className="text-text-secondary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-text-secondary hover:text-accent-text transition-colors">Home</a></li>
              <li><a href="/kelas" className="text-text-secondary hover:text-accent-text transition-colors">Kelas</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-text transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-text transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-secondary hover:text-accent-text transition-colors">FAQ</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-text transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-text transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-text transition-colors">Bantuan</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-light text-center">
          <p className="text-text-secondary body-small">
            © 2025 Skofie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;