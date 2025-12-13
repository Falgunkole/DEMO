import { User, MapPin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="pt-24 pb-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">About Us</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Vigicon Enterprises is a Pune-based technology solutions provider specializing in smart security, energy, and automation systems.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                We combine innovation and reliability to make homes and businesses more secure, efficient, and future-ready.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With expertise across CCTV surveillance, solar energy, smart home automation, and biometric systems, we deliver comprehensive solutions tailored to your needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              { icon: User, title: 'Proprietor', value: 'Mr. Vilas Shriram Kole' },
              { icon: FileText, title: 'Udyog Aadhaar', value: 'MH26D0206442' },
              { icon: MapPin, title: 'Address', value: '408, Audumber Apartment, Near Navasha Maruti Mandir, Sinhagad Road, Pune – 411030' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-500/50"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start">
                    <item.icon className="text-cyan-400 mr-4 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
