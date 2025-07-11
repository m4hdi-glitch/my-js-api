const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000; // 🔁 Use Render’s port if available

// Enable CORS
app.use(cors());

const userData = {
  name: "Luna",
  age: 12,
  hobby: "Drawing"
};

// Root route
app.get('/', (req, res) => {
  res.send('🎉 Your API is working! Try /api/profile');
});

// API route
app.get('/api/profile', (req, res) => {
  res.json(userData);
});

app.listen(PORT, () => {
  console.log(`✅ API is running at http://localhost:${PORT}/api/profile`);
});
