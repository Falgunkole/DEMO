import { Link } from 'react-router-dom';
import { Camera, Sun, Home, Battery, Droplets, Fingerprint } from 'lucide-react';

// Ensure these IDs are simple strings used in the URL
export const servicesData = [
  { id: 'cctv', icon: Camera, title: 'CCTV Installation', description: 'Surveillance solutions.', gradient: 'from-blue-500 to-cyan-500' },
  { id: 'solar', icon: Sun, title: 'Solar Energy', description: 'Renewable power.', gradient: 'from-orange-500 to-yellow-500' },
  { id: 'automation', icon: Home, title: 'Home Automation', description: 'Smart living.', gradient: 'from-purple-500 to-pink-500' },
];

export default function Services() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-4">
      {servicesData.map((service) => (
        <Link key={service.id} to={`/services/${service.id}`} className="block group">
          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
              <service.icon className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="text-slate-400 mt-2 text-sm">{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}