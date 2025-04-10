// Entry point for the backend server of the Currency Converter App.

// Import required modules
const express = require('express');             // Framework for building the server
const cors = require('cors');                   // Middleware to enable Cross-Origin Resource Sharing
require('dotenv').config();                     // Load environment variables from .env file

// Import route handlers
const convertRoutes = require('./routes/convert'); // Routes for handling currency conversion

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;          // Set the port from environment or default to 3000

// Middleware
app.use(cors());                                // Enable CORS for all incoming requests
app.use(express.json());                        // Parse incoming JSON payloads

// Routes
app.use('/', convertRoutes);                    // Mount conversion routes at root URL

// Root route - simple health check
app.get('/', (req, res) => {
  res.send('Currency Converter API is running. Use POST /convert to convert currencies.');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
