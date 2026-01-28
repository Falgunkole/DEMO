const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001; // Using 5001 to avoid common conflicts

app.use(cors());
app.use(express.json());

app.post('/api/bookings', (req, res) => {
  console.log('Data received:', req.body);
  res.status(200).json({ success: true, message: 'Booking received!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});