import { Link } from 'react-router-dom';
import { servicesData } from '../data/services'; // Ensure you have a central data file

export default function Services() {
  return (
    <div className="grid md:grid-cols-3 gap-8 px-4">
      {servicesData.map((service) => (
        <Link 
          key={service.id} 
          to={`/services/${service.id}`} 
          className="glass-card p-6 block hover:scale-105 transition-transform cursor-pointer"
        >
          <service.icon className="text-blue-500 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
          <p className="text-slate-400 mt-2">{service.description}</p>
        </Link>
      ))}
    </div>
  );
}
