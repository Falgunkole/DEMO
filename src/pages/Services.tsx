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
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
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
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">Business Services Portfolio</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4"></div>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
              Visualize exactly what you get before booking. Every service card includes demo images, key deliverables, and direct booking actions.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 hover:border-cyan-500/50 h-full"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>

                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>

                <div className={`bg-gradient-to-r ${service.gradient} px-5 py-4 text-white relative z-10 flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <service.icon size={20} />
                    <p className="font-semibold text-sm">{service.title}</p>
                  </div>
                  {service.popular && <BadgeCheck size={22} className="text-white/90" />}
                </div>

                <div className="p-5 sm:p-6 relative z-10">
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{service.shortDescription}</p>

                  <div className="space-y-2 mb-6">
                    {service.includes.slice(0, 2).map((item) => (
                      <p key={item} className="text-xs sm:text-sm text-slate-300">• {item}</p>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link to={`/services/${service.id}`} className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 font-semibold text-sm">
                      View details <ArrowRight size={14} />
                    </Link>
                    <Link to="/book" state={{ selectedService: service.title }} className="inline-flex items-center rounded-lg bg-cyan-500/20 px-3 py-1.5 text-xs sm:text-sm font-medium text-cyan-200 hover:bg-cyan-500/30">
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
