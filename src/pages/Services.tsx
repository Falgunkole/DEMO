import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { servicesData } from '../data/services';

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
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Business Services</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Security, automation, and energy solutions designed for modern businesses and homes with reliable implementation and support.
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
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <motion.div
                className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm hover:border-cyan-500/50 h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>

                <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative z-10 flex items-center justify-between`}>
                  <service.icon size={42} />
                  {service.popular && <BadgeCheck size={24} className="text-white/90" />}
                </div>

                <div className="p-8 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-5">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.includes.slice(0, 2).map((item) => (
                      <p key={item} className="text-sm text-slate-300">• {item}</p>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold"
                    >
                      View details <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/book"
                      state={{ selectedService: service.title }}
                      className="inline-flex items-center rounded-lg bg-cyan-500/20 px-3 py-1.5 text-sm font-medium text-cyan-200 hover:bg-cyan-500/30"
                    >
                      Book now
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
