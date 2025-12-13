import { ArrowRight, Camera, Sun, Droplets, Home as HomeIcon, Zap, Fingerprint, Battery, CheckCircle2, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';

const features = [
  {
    icon: CheckCircle2,
    title: 'Expert Installation',
    description: 'Professional technicians with years of experience'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Products',
    description: 'Top brands like Hikvision & CP Plus'
  },
  {
    icon: CheckCircle2,
    title: 'After-Sales Support',
    description: 'Comprehensive maintenance and support'
  },
  {
    icon: CheckCircle2,
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising quality'
  }
];

const serviceOverview = [
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    description: 'Advanced HD and Wi-Fi surveillance systems for comprehensive security monitoring of your property.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Sun,
    title: 'Solar Energy',
    description: 'Harness renewable energy with our solar panel installations and smart monitoring systems.',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Battery,
    title: 'Solar CCTV',
    description: 'Off-grid surveillance powered by solar energy for remote and rural locations.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: HomeIcon,
    title: 'Smart Automation',
    description: 'Control your entire home with voice commands and automated lighting, fans, and devices.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Droplets,
    title: 'Smart Drainage',
    description: 'IoT-enabled drainage monitoring system to prevent overflow and optimize water management.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Fingerprint,
    title: 'Biometric Access',
    description: 'Secure biometric attendance and access control systems for enhanced security.',
    color: 'from-slate-600 to-slate-700'
  },
  {
    icon: Zap,
    title: 'EV Charging',
    description: 'Efficient and compact EV charging infrastructure for sustainable electric vehicle solutions.',
    color: 'from-green-500 to-teal-600'
  }
];

export default function Home() {
  const navigate = useNavigate();

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

  return (
    <div>
      <Hero />

      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Why Choose Vigicon?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600/50 backdrop-blur-sm hover:border-cyan-500/50 group"
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(34, 211, 238, 0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Comprehensive smart technology solutions tailored to your needs
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {serviceOverview.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm hover:border-cyan-500/50 h-full flex flex-col"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>

                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative z-10`}>
                    <service.icon size={40} />
                  </div>

                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>
                    <motion.button
                      onClick={() => navigate('/services')}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm inline-flex items-center group/btn"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        ></motion.div>

        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
            <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get expert consultation from our team. We'll assess your needs and provide customized smart solutions for your home or business.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              ></motion.span>
              <span className="relative flex items-center gap-2">
                <Star size={18} className="group-hover:animate-spin" />
                Get Your Free Consultation Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-16 bg-slate-900 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { value: '500+', label: 'Successful Installations' },
              { value: '100%', label: 'Customer Satisfaction' },
              { value: '7+', label: 'Years of Experience' }
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600/50">
                  <motion.div
                    className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-slate-300">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
