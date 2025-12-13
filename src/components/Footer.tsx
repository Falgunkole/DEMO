import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">VIGICON</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for smart security, energy, and automation solutions in Pune.
            </p>
            <p className="text-sm text-gray-500">
              Udyog Aadhaar: MH26D0206442
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-blue-400 mr-2 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-400 text-sm">408, Audumber Apartment, Near Navasha Maruti Mandir, Sinhagad Road, Pune – 411030</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-400 mr-2" size={18} />
                <p className="text-gray-400">+91 9309961807</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-400 mr-2" size={18} />
                <p className="text-gray-400">vigiconenterprises@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vigicon Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
