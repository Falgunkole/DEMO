/* src/pages/BookService.tsx */
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function BookService() {
  const location = useLocation();
  const initialService = location.state?.serviceName || '';

  const [form, setForm] = useState({
    name: '',
    address: '',
    service: initialService,
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${form.name}! Your request for ${form.service} has been received.`);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Service Request Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-400 mb-2">Full Name</label>
              <input 
                required
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500"
                onChange={e => setForm({...form, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-2">Service Selection</label>
              <input 
                readOnly
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-slate-300 outline-none"
                value={form.service}
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-2">Installation Address</label>
              <textarea 
                required
                rows={3}
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500"
                onChange={e => setForm({...form, address: e.target.value})}
              />
            </div>
            <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
