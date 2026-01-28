import { Camera, Sun, Droplets, Home, Zap, Fingerprint, Battery } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'CCTV Camera Installation',
    description: 'High-quality Hikvision & CP Plus systems, wired & wireless surveillance solutions with remote monitoring capabilities.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Sun,
    title: 'Smart Solar Energy Systems',
    description: 'Rooftop solar setup with monitoring and maintenance. Reduce your electricity bills while contributing to a greener future.',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Battery,
    title: 'Smart Solar CCTV',
    description: 'Solar-powered surveillance systems for remote areas. Reliable security without grid dependency.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Home,
    title: 'Smart Home Automation',
    description: 'Control your lights, fans, and devices with one touch. Experience modern living with intelligent automation.',
    gradient: 'from-blue-500 to-slate-600'
  },
  {
    icon: Droplets,
    title: 'Smart Drainage System',
    description: 'IoT-based drainage monitoring to prevent overflow and ensure efficient water management.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Fingerprint,
    title: 'Biometric Access Control',
    description: 'Advanced attendance & door access systems for enhanced security and streamlined workforce management.',
    gradient: 'from-slate-600 to-gray-700'
  },
  {
    icon: Zap,
    title: 'EV Charging Solutions',
    description: 'Compact and efficient charging setups for electric vehicles. Future-ready infrastructure for sustainable transportation.',
    gradient: 'from-green-600 to-teal-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions for modern homes and businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
           /* src/components/Services.tsx (Partial) */
// Inside your map function:
<div
  key={index}
  className="glass-card group p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-500 cursor-default"
>
  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
    <service.icon className="text-white" size={28} />
  </div>
  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
  <p className="text-slate-400 leading-relaxed text-sm md:text-base">{service.description}</p>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}
