const express = require('express');
const cors = require('cors');
const app = express();

// Use the port from environment (for Render), or 3000 locally
const PORT = process.env.PORT || 3000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Your sample user data
const userData = {
  name: "Luna",
  age: 12,
  hobby: "Drawing"
};

// API route
app.get('/api/profile', (req, res) => {
  res.json(userData);
});

// Fallback route (optional)
app.get('/', (req, res) => {
  res.send("✅ Your API is running. Visit /api/profile to see the data.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ API is running at http://localhost:${PORT}/api/profile`);
});
