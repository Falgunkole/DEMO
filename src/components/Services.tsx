/* src/components/Services.tsx */
import { Camera, Sun, Droplets, Home, Zap, Fingerprint, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const servicesData = [
  {
    id: 'cctv-installation',
    icon: Camera,
    title: 'CCTV Camera Installation',
    description: 'High-quality Hikvision & CP Plus systems, wired & wireless surveillance solutions.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'solar-energy',
    icon: Sun,
    title: 'Smart Solar Energy Systems',
    description: 'Rooftop solar setup with monitoring and maintenance for a greener future.',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    id: 'solar-cctv',
    icon: Battery,
    title: 'Smart Solar CCTV',
    description: 'Solar-powered surveillance systems for remote areas without grid dependency.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'home-automation',
    icon: Home,
    title: 'Smart Home Automation',
    description: 'Control your lights, fans, and devices with one touch from anywhere.',
    gradient: 'from-blue-500 to-slate-600'
  },
  {
    id: 'drainage-system',
    icon: Droplets,
    title: 'Smart Drainage System',
    description: 'IoT-based drainage monitoring to prevent overflow and ensure water management.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'biometric-access',
    icon: Fingerprint,
    title: 'Biometric Access Control',
    description: 'Advanced attendance & door access systems for enhanced security.',
    gradient: 'from-slate-600 to-gray-700'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`}
              className="block group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="glass-card rounded-3xl p-8 h-full border border-white/10 hover:border-blue-500/50 transition-colors"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                <div className="text-blue-400 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
                  View Service Details <span className="ml-2">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
