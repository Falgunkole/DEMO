import { ArrowRight, CalendarClock, CheckCircle2, Shield, Star, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import { servicesData, trustHighlights } from '../data/services';
import { api, AdminSummary } from '../lib/api';

const features = [
  {
    icon: CheckCircle2,
    title: 'Enterprise Design Standards',
    description: 'Premium layouts, professional motion, and experience-first information architecture.'
  },
  {
    icon: Shield,
    title: 'Security-First Engineering',
    description: 'Every solution is designed with uptime, safety, and controlled operations in mind.'
  },
  {
    icon: Users,
    title: 'Dedicated Program Team',
    description: 'Consultants, installers, and support engineers work as one unified delivery team.'
  },
  {
    icon: CalendarClock,
    title: 'Structured Rollout Timeline',
    description: 'Clear planning, transparent milestones, and post-installation support handover.'
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [summary, setSummary] = useState<AdminSummary | null>(null);

  useEffect(() => {
    api.getAdminSummary().then(setSummary).catch(() => setSummary(null));
  }, []);

  return (
    <div>
      <Hero />

      <section className="py-16 bg-slate-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Live Booking Intelligence</h2>
            <p className="text-slate-300 mb-6">Real-time view of customer demand captured in your connected project database.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
                <p className="text-xs uppercase tracking-wider text-slate-400">Total Bookings</p>
                <p className="text-3xl font-black text-cyan-300">{summary?.bookingsCount ?? 0}</p>
              </div>
              <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
                <p className="text-xs uppercase tracking-wider text-slate-400">Total Leads</p>
                <p className="text-3xl font-black text-cyan-300">{summary?.contactsCount ?? 0}</p>
              </div>
            </div>
            <div className="mt-5 space-y-2">
              {(summary?.popularServices ?? []).map((item) => (
                <div key={item.service} className="flex items-center justify-between rounded-lg bg-slate-800/70 p-3 border border-slate-700">
                  <p className="text-sm text-slate-200">{item.service}</p>
                  <p className="text-sm font-semibold text-cyan-300">{item.count} bookings</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Recently Booked Services</h3>
            <div className="space-y-3">
              {(summary?.recentBookings ?? []).length ? (
                summary?.recentBookings.map((booking) => (
                  <div key={booking.bookingId} className="rounded-lg border border-slate-700 bg-slate-800/70 p-3">
                    <p className="text-slate-100 font-medium">{booking.service}</p>
                    <p className="text-sm text-slate-400">Booked by {booking.name}</p>
                    <p className="text-xs text-slate-500">{new Date(booking.createdAt).toLocaleString()}</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 text-sm">No bookings yet. Your new website is ready to collect them.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Why Large Enterprises Choose Vigicon</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <motion.div key={feature.title} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600/50" whileHover={{ y: -5 }}>
                <feature.icon className="text-cyan-400 mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Premium Service Catalogue</h2>
            <p className="text-slate-300 mt-3">Every service has dedicated detail pages with pricing, photos, reviews, and instant booking.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <div key={service.id} className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900/70">
                <img src={service.heroImage} alt={service.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-cyan-300">Starting from {service.startingPrice}</p>
                  <h3 className="text-white font-semibold mt-2">{service.title}</h3>
                  <p className="text-sm text-slate-300 mt-2 mb-4">{service.shortDescription}</p>
                  <Link to={`/services/${service.id}`} className="text-cyan-300 inline-flex items-center gap-2 font-medium">
                    View full service page <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 border-y border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {trustHighlights.map((highlight) => (
            <div key={highlight.title} className="rounded-xl border border-slate-700 bg-slate-800/70 p-6">
              <highlight.icon className="text-cyan-400 mb-3" size={24} />
              <h3 className="text-white font-semibold mb-1">{highlight.title}</h3>
              <p className="text-slate-300 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Launch Your Security Upgrade?</h2>
            <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto leading-relaxed">
              Book your project consultation now and receive a detailed implementation roadmap from our engineering team.
            </p>
            <motion.button onClick={() => navigate('/book')} className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-bold rounded-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <span className="relative flex items-center gap-2">
                <Star size={18} />
                Book Premium Consultation
                <ArrowRight size={20} />
              </span>
            </motion.button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
