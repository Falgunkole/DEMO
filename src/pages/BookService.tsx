/* src/pages/BookService.tsx */
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function BookService() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: location.state?.selectedService || 'Consultation Request'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Request received for ${formData.service}! We'll contact ${formData.name} soon.`);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-xl mx-auto px-4">
        <div className="glass-card p-8 rounded-3xl border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Service Request</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-400 text-sm mb-2">Service Selected</label>
              <input readOnly value={formData.service} className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-slate-300" />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">Your Name</label>
              <input required type="text" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500" onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">Installation Address</label>
              <textarea required rows={3} className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 resize-none" onChange={e => setFormData({...formData, address: e.target.value})} />
            </div>
            <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2">
              Submit Request <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
