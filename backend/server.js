const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// This endpoint receives the form data
app.post('/api/bookings', (req, res) => {
  const { name, phone, address, service } = req.body;
  
  // LOGIC: Save to Database (like MongoDB) or Send Email
  console.log(`New Booking: ${name} wants ${service} at ${address}`);

  res.status(200).json({ success: true, message: "Booking received successfully!" });
});

app.listen(5000, () => console.log('Server running on port 5000'));