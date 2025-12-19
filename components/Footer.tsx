import React from 'react';
import { Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-slate-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-2xl text-white font-bold mb-4">Earlington Legacy Initiative NPC</h2>
            <p className="text-sm max-w-sm mb-2">
              Dedicated to transforming Earlington Secondary School into a center of innovation. Join us in creating a brighter future for our students.
            </p>
            <p className="text-sm font-mono text-slate-500 mb-6">Reg No: 2025/931583/08</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="mailto:info@earlingtonlegacy.org.za" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Mail size={16} />
              </a>
              <a href="tel:+27836573397" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Mission & Vision</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Board of Directors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Earlington Day 2026</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Project Phases</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone size={14} /> +27 83 657 3397</li>
              <li className="flex items-center gap-2"><Mail size={14} /> info@earlingtonlegacy.org.za</li>
              <li className="pt-4 border-t border-white/5 mt-4"><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono">
          <p>© 2025 Earlington Legacy Initiative NPC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for the students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;