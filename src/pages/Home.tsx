import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import { servicesData, trustHighlights } from '../data/services';

const features = [
  {
    icon: CheckCircle2,
    title: 'Expert Installation',
    description: 'Professional technicians with years of hands-on experience.'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Products',
    description: 'Top-quality brands and components with reliable warranty support.'
  },
  {
    icon: CheckCircle2,
    title: 'Business Focused',
    description: 'Solutions designed around uptime, safety, and business continuity.'
  },
  {
    icon: CheckCircle2,
    title: 'After-Sales Support',
    description: 'Maintenance and support whenever your systems need attention.'
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
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Why Businesses Choose Vigicon</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
            </div>
          </ScrollReveal>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600/50 backdrop-blur-sm hover:border-cyan-500/50 group" whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(34, 211, 238, 0.1)' }} transition={{ duration: 0.3 }}>
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Service Portfolio</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">Integrated home and business technology services including smart door locks, CCTV, and energy solutions.</p>
            </div>
          </ScrollReveal>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {servicesData.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <motion.div className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm hover:border-cyan-500/50 h-full flex flex-col" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white relative z-10`}>
                    <service.icon size={40} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{service.shortDescription}</p>
                    <Link to={`/services/${service.id}`} className="text-cyan-400 hover:text-cyan-300 font-medium text-sm inline-flex items-center group/btn">
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 border-y border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {trustHighlights.map((highlight) => (
            <div key={highlight.title} className="rounded-xl border border-slate-700 bg-slate-800/70 p-6">
              <highlight.icon className="text-cyan-400 mb-3" size={24} />
              <h3 className="text-white font-semibold mb-1">{highlight.title}</h3>
              <p className="text-slate-300 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Upgrade Your Property?</h2>
            <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get expert consultation from our team and receive a tailored plan for your business or home.
            </p>
            <motion.button onClick={() => navigate('/book')} className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-2xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <span className="relative flex items-center gap-2">
                <Star size={18} />
                Request Site Visit
                <ArrowRight size={20} />
              </span>
            </motion.button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
