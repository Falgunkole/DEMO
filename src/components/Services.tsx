/* src/components/Services.tsx */
import { Camera, Sun, Droplets, Home, Zap, Fingerprint, Battery } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Data exported so it can be used by the Detail page
export const servicesData = [
  {
    id: 'cctv-camera',
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
    id: 'automation',
    icon: Home,
    title: 'Smart Home Automation',
    description: 'Control your lights, fans, and devices with one touch from anywhere.',
    gradient: 'from-blue-500 to-slate-600'
  },
  {
    id: 'drainage',
    icon: Droplets,
    title: 'Smart Drainage System',
    description: 'IoT-based drainage monitoring to prevent overflow and ensure water management.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'biometric',
    icon: Fingerprint,
    title: 'Biometric Access Control',
    description: 'Advanced attendance & door access systems for enhanced security.',
    gradient: 'from-slate-600 to-gray-700'
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="glass-card rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
              <div className="mt-6 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                View Details →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
