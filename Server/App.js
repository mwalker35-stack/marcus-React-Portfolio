const express = require('express');
const app = express();

// Add middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up routes and handle form submission
// Add your route logic here

// Start the server
const PORT = 5000; // Choose a port number for your server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
