import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const linkVariants = {
    hover: { x: 5, color: '#22d3ee' }
  };

  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">VIGICON</h3>
            <p className="text-slate-300 mb-4">
              Your trusted partner for smart security, energy, and automation solutions in Pune.
            </p>
            <p className="text-sm text-slate-400">
              Udyog Aadhaar: MH26D0206442
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <motion.li key={item} whileHover="hover">
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition inline-flex items-center"
                  >
                    <motion.span variants={linkVariants}>
                      {item}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start group">
                <MapPin className="text-cyan-400 mr-2 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={18} />
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition">408, Audumber Apartment, Near Navasha Maruti Mandir, Sinhagad Road, Pune – 411030</p>
              </div>
              <div className="flex items-center group">
                <Phone className="text-cyan-400 mr-2 group-hover:scale-110 transition-transform" size={18} />
                <p className="text-slate-400 group-hover:text-slate-300 transition">+91 9309961807</p>
              </div>
              <div className="flex items-center group">
                <Mail className="text-cyan-400 mr-2 group-hover:scale-110 transition-transform" size={18} />
                <p className="text-slate-400 group-hover:text-slate-300 transition">vigiconenterprises@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vigicon Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
