/* src/pages/BookService.tsx */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function BookService() {
  const location = useLocation();
  const preSelectedService = location.state?.selectedService || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    serviceType: preSelectedService,
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Functionality preserved: Simulate API call
    setTimeout(() => setSubmitted(true), 800);
  };

  if (submitted) {
    return (
      <div className="pt-40 text-center px-4">
        <CheckCircle2 size={60} className="text-emerald-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Booking Request Sent!</h2>
        <p className="text-slate-400">Our team at Vigicon will contact you shortly to confirm the appointment.</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <ScrollReveal>
          <div className="glass-card p-8 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-2">Book a Service</h2>
            <p className="text-slate-400 mb-8">Fill out the details below and we'll handle the rest.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Service Required</label>
                <select 
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                >
                  <option value="">Select a service</option>
                  <option value="CCTV Installation">CCTV Installation</option>
                  <option value="Solar Energy">Solar Energy</option>
                  <option value="Home Automation">Home Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Installation Address</label>
                <textarea
                  required
                  rows={3}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-blue-900/20"
              >
                Submit Booking <Send size={18} />
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
