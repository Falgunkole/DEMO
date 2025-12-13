import { Camera, Sun, Droplets, Home, Zap, Fingerprint, Battery } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    icon: Camera,
    title: 'CCTV Camera Installation',
    description: 'High-quality Hikvision & CP Plus systems, wired & wireless surveillance solutions with remote monitoring capabilities. Our expert technicians ensure optimal placement and setup for maximum coverage.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Sun,
    title: 'Smart Solar Energy Systems',
    description: 'Rooftop solar setup with monitoring and maintenance. Reduce your electricity bills while contributing to a greener future. We provide end-to-end solar solutions with performance tracking.',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Battery,
    title: 'Smart Solar CCTV',
    description: 'Solar-powered surveillance systems for remote areas. Reliable security without grid dependency. Perfect for farms, warehouses, and off-grid locations.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Home,
    title: 'Smart Home Automation',
    description: 'Control your lights, fans, and devices with one touch. Experience modern living with intelligent automation. Voice-controlled and app-based management included.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Droplets,
    title: 'Smart Drainage System',
    description: 'IoT-based drainage monitoring to prevent overflow and ensure efficient water management. Real-time alerts and analytics for proactive maintenance.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Fingerprint,
    title: 'Biometric Access Control',
    description: 'Advanced attendance & door access systems for enhanced security and streamlined workforce management. Reliable, fast, and secure biometric recognition.',
    color: 'from-slate-600 to-slate-700'
  },
  {
    icon: Zap,
    title: 'EV Charging Solutions',
    description: 'Compact and efficient charging setups for electric vehicles. Future-ready infrastructure for sustainable transportation. Easy installation and management.',
    color: 'from-green-500 to-teal-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <div className="pt-24 pb-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Our Services</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive technology solutions for modern homes and businesses
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm hover:border-cyan-500/50 h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>

                <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative z-10`}>
                  <service.icon size={48} />
                </div>

                <div className="p-8 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
