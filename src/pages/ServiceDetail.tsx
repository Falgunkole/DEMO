import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Star } from 'lucide-react';
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
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <button onClick={() => navigate(-1)} className="flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back
        </button>

        <div className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900/70">
          <img src={service.heroImage} alt={service.title} className="h-72 md:h-96 w-full object-cover" />
          <div className="p-8 md:p-10">
            <p className="text-xs uppercase tracking-wider text-cyan-300">Starting Price: {service.startingPrice}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-2">{service.title}</h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">{service.description}</p>

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

            <h2 className="text-2xl font-bold text-white mb-4">Packages & Pricing</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {service.packages.map((pkg) => (
                <div key={pkg.name} className="rounded-xl border border-slate-700 bg-slate-800/70 p-5">
                  <p className="text-cyan-300 text-sm uppercase tracking-wide">{pkg.name}</p>
                  <p className="text-3xl font-black text-white mt-1">{pkg.price}</p>
                  <p className="text-sm text-slate-400">Timeline: {pkg.timeline} • {pkg.idealFor}</p>
                  <div className="mt-4 space-y-1">
                    {pkg.includes.map((item) => (
                      <p key={item} className="text-sm text-slate-200">• {item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Project Photos</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {service.gallery.map((image) => (
                <img key={image} src={image} alt={`${service.title} project`} className="h-44 w-full rounded-xl object-cover border border-slate-700" />
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Client Reviews</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {service.reviews.map((review) => (
                <div key={review.name} className="rounded-xl border border-slate-700 bg-slate-800/70 p-5">
                  <div className="flex items-center gap-1 text-amber-300 mb-2">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={`${review.name}-${index}`} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-200">“{review.quote}”</p>
                  <p className="text-sm text-slate-400 mt-3">{review.name} • {review.company}</p>
                </div>
              ))}
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
    </div>
  );
}
