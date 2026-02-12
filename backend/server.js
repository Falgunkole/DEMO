const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

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

const isEmail = (value) => /\S+@\S+\.\S+/.test(value);

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

  bookings.push(booking);
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

  contacts.push(enquiry);
  return res.status(201).json({
    success: true,
    message: 'Thanks for contacting us. We will get back to you shortly.',
    contactId: enquiry.contactId
  });
});

app.get('/api/admin/summary', (_req, res) => {
  res.status(200).json({
    success: true,
    bookingsCount: bookings.length,
    contactsCount: contacts.length,
    recentBookings: bookings.slice(-5),
    recentContacts: contacts.slice(-5)
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
