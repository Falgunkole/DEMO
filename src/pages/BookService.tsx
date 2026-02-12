import { useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Calendar, Send } from 'lucide-react';
import { api } from '../lib/api';
import { servicesData } from '../data/services';

export default function BookService() {
  const location = useLocation();
  const selectedService = location.state?.selectedService || 'CCTV Camera Installation';
  const serviceTitles = useMemo(() => servicesData.map((service) => service.title), []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: selectedService,
    preferredDate: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await api.submitBooking(formData);
      setMessage(`${response.message} Reference ID: ${response.bookingId}`);
      setFormData({ ...formData, name: '', phone: '', address: '', preferredDate: '', notes: '' });
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to submit your booking right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <div className="glass-card p-8 rounded-3xl border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-2">Schedule a Service</h2>
          <p className="text-slate-300 mb-6">Share your requirement and our team will contact you with a quote and appointment options.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-400 text-sm mb-2">Service Selected</label>
              <select value={formData.service} className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-slate-300" onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                {serviceTitles.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">Your Name</label>
              <input required type="text" value={formData.name} className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">Phone Number</label>
              <input required type="tel" value={formData.phone} className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">Installation Address</label>
              <textarea required rows={3} value={formData.address} className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 resize-none" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">Preferred Date (optional)</label>
              <div className="relative">
                <input type="date" value={formData.preferredDate} className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })} />
                <Calendar size={16} className="absolute right-3 top-3.5 text-slate-400" />
              </div>
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">Additional Notes (optional)</label>
              <textarea rows={3} value={formData.notes} className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 resize-none" onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder="Site details, preferred call time, etc." />
            </div>
            <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors disabled:opacity-60">
              {isSubmitting ? 'Submitting...' : 'Submit Request'} <Send size={18} />
            </button>
            {message && <p className="text-sm text-cyan-200">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
