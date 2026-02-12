const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;
const OWNER_DASHBOARD_KEY = process.env.OWNER_DASHBOARD_KEY || 'owner-demo-key';

app.use(cors());
app.use(express.json());

const services = [
  { id: 'cctv', title: 'CCTV Camera Installation' },
  { id: 'door-lock', title: 'Smart Door Lock Systems' },
  { id: 'solar', title: 'Smart Solar Energy Systems' },
  { id: 'solar-cctv', title: 'Solar CCTV for Remote Sites' },
  { id: 'automation', title: 'Smart Home Automation' },
  { id: 'drainage', title: 'Smart Drainage Monitoring' },
  { id: 'ev', title: 'EV Charging Solutions' }
];

const bookings = [];
const contacts = [];
const notifications = [];

const isEmail = (value) => /\S+@\S+\.\S+/.test(value);

const buildNotification = (type, payload) => {
  const notification = {
    id: `NT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    type,
    unread: true,
    payload,
    createdAt: new Date().toISOString()
  };
  notifications.unshift(notification);
};

const ensureOwnerAuth = (req, res, next) => {
  const key = req.headers['x-owner-key'];
  if (!key || key !== OWNER_DASHBOARD_KEY) {
    return res.status(401).json({ success: false, message: 'Unauthorized owner access' });
  }

  return next();
};

app.get('/api/health', (_req, res) => {
  res.status(200).json({ success: true, status: 'ok' });
});

app.get('/api/services', (_req, res) => {
  res.status(200).json({ success: true, services });
});

app.post('/api/bookings', (req, res) => {
  const { name, phone, address, service, preferredDate, notes } = req.body || {};

  if (!name || !phone || !address || !service) {
    return res.status(400).json({
      success: false,
      message: 'name, phone, address and service are required'
    });
  }

  const booking = {
    bookingId: `BK-${Date.now()}`,
    name,
    phone,
    address,
    service,
    preferredDate: preferredDate || null,
    notes: notes || null,
    createdAt: new Date().toISOString()
  };

  bookings.unshift(booking);
  buildNotification('booking', booking);

  return res.status(201).json({
    success: true,
    message: 'Booking received. Our team will contact you shortly.',
    bookingId: booking.bookingId
  });
});

app.post('/api/contact', (req, res) => {
  const { name, phone, email, message } = req.body || {};

  if (!name || !phone || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'name, phone, email and message are required'
    });
  }

  if (!isEmail(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  const enquiry = {
    contactId: `CT-${Date.now()}`,
    name,
    phone,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  contacts.unshift(enquiry);
  buildNotification('contact', enquiry);

  return res.status(201).json({
    success: true,
    message: 'Thanks for contacting us. We will get back to you shortly.',
    contactId: enquiry.contactId
  });
});

app.get('/api/admin/summary', ensureOwnerAuth, (_req, res) => {
  res.status(200).json({
    success: true,
    bookingsCount: bookings.length,
    contactsCount: contacts.length,
    unreadNotifications: notifications.filter((item) => item.unread).length,
    recentBookings: bookings.slice(0, 10),
    recentContacts: contacts.slice(0, 10),
    recentNotifications: notifications.slice(0, 20)
  });
});

app.post('/api/admin/notifications/read-all', ensureOwnerAuth, (_req, res) => {
  notifications.forEach((item) => {
    item.unread = false;
  });

  res.status(200).json({ success: true, message: 'All notifications marked as read' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
