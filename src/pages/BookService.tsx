const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:5000/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Backend is not running. Please start the server!");
  }
};
