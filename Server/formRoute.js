const express = require('express');
const app = express();
const axios = require('axios');

// Add middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up route to handle form submission
app.post('/api/send-email', async (req, res) => {
  try {
    // Access form data from req.body
    const { fullName, companyName, email, message } = req.body;

    // Add your email sending logic here
    // Example using axios to make HTTP request
    await axios.post('https://api.example.com/send-email', {
      fullName,
      companyName,
      email,
      message
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start the server
const PORT = 5000; // Choose a port number for your server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
