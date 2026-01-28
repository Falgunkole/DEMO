const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
   // Inside handleSubmit in BookService.tsx
const response = await fetch('http://localhost:5001/api/bookings', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});

    if (response.ok) {
      alert("Booking Successful!");
    }
  } catch (error) {
    console.error("Connection failed:", error);
    alert("Could not connect to the backend server.");
  }
};