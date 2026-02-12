import { useEffect, useState } from 'react';
import { Bell, ShieldCheck } from 'lucide-react';
import { api, BookingRecord, ContactRecord } from '../lib/api';

const ownerKey = import.meta.env.VITE_OWNER_DASHBOARD_KEY || 'owner-demo-key';

export default function OwnerDashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [contacts, setContacts] = useState<ContactRecord[]>([]);
  const [unread, setUnread] = useState(0);

  const fetchSummary = async () => {
    try {
      const summary = await api.getAdminSummary(ownerKey);
      setBookings(summary.recentBookings);
      setContacts(summary.recentContacts);
      setUnread(summary.unreadNotifications);
      setError('');
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : 'Could not load owner dashboard.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary();
    const timer = setInterval(fetchSummary, 15000);
    return () => clearInterval(timer);
  }, []);

  const markRead = async () => {
    try {
      await api.markNotificationsRead(ownerKey);
      await fetchSummary();
    } catch (markError) {
      setError(markError instanceof Error ? markError.message : 'Could not update notifications.');
    }
  };

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Owner Dashboard</h1>
              <p className="text-slate-300 text-sm mt-1">This page tells the owner every time a booking or enquiry is submitted.</p>
            </div>
            <button onClick={markRead} className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-400">
              <Bell size={16} /> Mark notifications as read
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-4">Set secure keys in production: <code>OWNER_DASHBOARD_KEY</code> in backend and <code>VITE_OWNER_DASHBOARD_KEY</code> in frontend.</p>
        </div>

        {error && <div className="mb-6 rounded-xl border border-red-500/50 bg-red-500/10 px-4 py-3 text-red-200">{error}</div>}

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="text-slate-400 text-sm">Unread notifications</p>
            <p className="text-2xl font-bold text-white mt-1">{loading ? '--' : unread}</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="text-slate-400 text-sm">Recent bookings</p>
            <p className="text-2xl font-bold text-white mt-1">{loading ? '--' : bookings.length}</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="text-slate-400 text-sm">Recent enquiries</p>
            <p className="text-2xl font-bold text-white mt-1">{loading ? '--' : contacts.length}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <h2 className="text-lg font-semibold text-white mb-4">Latest Bookings</h2>
            <div className="space-y-3 max-h-[420px] overflow-auto pr-2">
              {bookings.map((booking) => (
                <div key={booking.bookingId} className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm">
                  <p className="text-white font-semibold">{booking.name} • {booking.service}</p>
                  <p className="text-slate-300">{booking.phone}</p>
                  <p className="text-slate-400">{booking.address}</p>
                </div>
              ))}
              {!loading && bookings.length === 0 && <p className="text-slate-400 text-sm">No bookings yet.</p>}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <h2 className="text-lg font-semibold text-white mb-4">Latest Enquiries</h2>
            <div className="space-y-3 max-h-[420px] overflow-auto pr-2">
              {contacts.map((contact) => (
                <div key={contact.contactId} className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm">
                  <p className="text-white font-semibold">{contact.name} • {contact.email}</p>
                  <p className="text-slate-300">{contact.phone}</p>
                  <p className="text-slate-400">{contact.message}</p>
                </div>
              ))}
              {!loading && contacts.length === 0 && <p className="text-slate-400 text-sm">No enquiries yet.</p>}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-100 text-sm flex items-start gap-2">
          <ShieldCheck size={18} className="mt-0.5" />
          Owner workflow: keep this dashboard open on phone/laptop to track new requests live. It refreshes automatically every 15 seconds.
        </div>
      </div>
    </div>
  );
}
