const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const DB_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DB_DIR, 'db.json');

const services = [
  { id: 'cctv', title: 'CCTV Camera Installation', category: 'Security', startingPrice: '₹14,999' },
  { id: 'door-lock', title: 'Smart Door Lock Systems', category: 'Security', startingPrice: '₹12,500' },
  { id: 'solar', title: 'Smart Solar Energy Systems', category: 'Energy', startingPrice: '₹89,000' },
  { id: 'solar-cctv', title: 'Solar CCTV for Remote Sites', category: 'Security + Energy', startingPrice: '₹55,000' },
  { id: 'automation', title: 'Smart Home Automation', category: 'Automation', startingPrice: '₹22,000' },
  { id: 'drainage', title: 'Smart Drainage Monitoring', category: 'IoT Monitoring', startingPrice: '₹30,000' },
  { id: 'ev', title: 'EV Charging Solutions', category: 'Energy', startingPrice: '₹49,000' }
];

const isEmail = (value) => /\S+@\S+\.\S+/.test(value);

function ensureDatabase() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_FILE)) {
    const emptyDb = {
      bookings: [],
      contacts: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(emptyDb, null, 2), 'utf-8');
  }
}

function readDb() {
  ensureDatabase();
  const raw = fs.readFileSync(DB_FILE, 'utf-8');
  return JSON.parse(raw);
}

function writeDb(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

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

  const db = readDb();

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

  db.bookings.push(booking);
  writeDb(db);

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

  const db = readDb();

  const enquiry = {
    contactId: `CT-${Date.now()}`,
    name,
    phone,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  db.contacts.push(enquiry);
  writeDb(db);

  return res.status(201).json({
    success: true,
    message: 'Thanks for contacting us. We will get back to you shortly.',
    contactId: enquiry.contactId
  });
});

app.get('/api/admin/summary', (_req, res) => {
  const db = readDb();

  const serviceCounts = db.bookings.reduce((acc, booking) => {
    const key = booking.service || 'Unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const popularServices = Object.entries(serviceCounts)
    .map(([service, count]) => ({ service, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 4);

  res.status(200).json({
    success: true,
    bookingsCount: db.bookings.length,
    contactsCount: db.contacts.length,
    recentBookings: db.bookings.slice(-5).reverse(),
    recentContacts: db.contacts.slice(-5).reverse(),
    popularServices
  });
});

ensureDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
