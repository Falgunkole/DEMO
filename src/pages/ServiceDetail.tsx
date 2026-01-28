/* src/pages/ServiceDetail.tsx */
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../components/Services';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams(); // URL ID detection
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) return <div className="pt-40 text-center text-white">Service Not Found</div>;

  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <button onClick={() => navigate(-1)} className="flex items-center text-slate-400 hover:text-white mb-8">
          <ArrowLeft size={20} className="mr-2" /> Back
        </button>

        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10">
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8`}>
            <service.icon className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            {service.description} Our professional team in Pune ensures a seamless setup and provides 24/7 technical support.
          </p>

          <button
            /* THIS LINE PASSES THE SERVICE NAME TO THE BOOKING FORM */
            onClick={() => navigate('/book', { state: { selectedService: service.title } })}
            className="w-full md:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-blue-900/40"
          >
            Book This Service
          </button>
        </div>
      </div>
    </div>
  );
}
