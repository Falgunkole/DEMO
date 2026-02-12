import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { servicesData } from '../data/services';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <div className="pt-40 text-center text-white min-h-screen bg-slate-950">
        <h2 className="text-2xl mb-4">Service Not Found</h2>
        <button onClick={() => navigate('/services')} className="text-blue-400 underline">Return to Services</button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <button onClick={() => navigate(-1)} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back
        </button>

        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10">
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8`}>
            <service.icon className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">{service.description}</p>

          <div className="mb-10 rounded-xl border border-slate-700 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">What is included</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.includes.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-slate-200">
                  <Check size={16} className="mt-1 text-cyan-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/book"
              state={{ selectedService: service.title }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all"
            >
              Book this service
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 rounded-xl font-semibold transition-all"
            >
              Talk to an expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
