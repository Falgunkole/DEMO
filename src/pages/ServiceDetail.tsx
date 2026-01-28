/* src/pages/ServiceDetail.tsx */
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../components/Services';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) return <div className="pt-32 text-center text-white text-2xl">Service not found.</div>;

  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <button 
          onClick={() => navigate('/services')}
          className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Services
        </button>

        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8`}>
              <service.icon className="text-white" size={40} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              {service.fullDetails}
            </p>

            <div className="space-y-4 mb-10">
              {['Professional Installation', 'Post-Service Support', 'Certified Equipment'].map((feature) => (
                <div key={feature} className="flex items-center text-slate-300">
                  <CheckCircle size={20} className="text-emerald-400 mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/book', { state: { selectedService: service.title } })}
              className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/40"
            >
              Book This Service
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
