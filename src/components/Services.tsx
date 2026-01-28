/* src/components/Services.tsx */
import { Camera, Sun, Droplets, Home, Zap, Fingerprint, Battery } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export const servicesData = [
  {
    id: 'cctv-installation',
    icon: Camera,
    title: 'CCTV Camera Installation',
    description: 'High-quality Hikvision & CP Plus systems, wired & wireless surveillance solutions with remote monitoring capabilities.',
    fullDetails: 'Our CCTV solutions provide 24/7 surveillance with high-definition clarity. We specialize in both IP and Analog systems, offering remote mobile viewing, motion detection alerts, and secure cloud storage options.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'solar-energy',
    icon: Sun,
    title: 'Smart Solar Energy Systems',
    description: 'Rooftop solar setup with monitoring and maintenance. Reduce your electricity bills.',
    fullDetails: 'Switch to renewable energy with our premium solar panels. We handle everything from site assessment and installation to government subsidy processing and long-term maintenance.',
    gradient: 'from-orange-500 to-yellow-500'
  },
  // ... Add unique 'id' and 'fullDetails' to other existing services from your original file
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Click on any service to view full details and book a consultation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal key={index}>
              <div
                onClick={() => navigate(`/services/${service.id}`)}
                className="glass-card group p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-500 cursor-pointer h-full"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                <span className="text-blue-400 font-semibold group-hover:underline">View Details →</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
