/* src/pages/ServiceDetail.tsx */
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../components/Services';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams(); // Gets the 'id' from the URL
  const navigate = useNavigate();
  
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return <div className="pt-40 text-center text-white">Service Not Found</div>;
  }

  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <button 
          onClick={() => navigate(-1)} // Navigates back in history
          className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} /> Back
        </button>

        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-8`}>
            <service.icon className="text-white" size={40} />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            {service.description} We specialize in professional setups for {service.title} across Pune.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-10 flex items-start gap-4">
            <ShieldCheck className="text-blue-400 shrink-0" size={24} />
            <p className="text-slate-300 text-sm">
              Includes 1-year warranty and free installation support.
            </p>
          </div>

          <button
            onClick={() => navigate('/book', { state: { serviceName: service.title } })}
            className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-900/40"
          >
            Book This Service
          </button>
        </div>
      </div>
    </div>
  );
}
