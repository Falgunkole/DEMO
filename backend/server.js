const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// API Endpoint to handle bookings
app.post('/api/book', (req, res) => {
  const { name, address, service, phone } = req.body;
  
  console.log("New Booking Received:", { name, address, service, phone });

  // Here you would typically save to a database or send an email
  res.status(200).json({ 
    message: `Thank you, ${name}! Your booking for ${service} has been received.` 
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
