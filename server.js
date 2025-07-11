const express = require('express');
const cors = require('cors'); // 👈 Add this line
const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors()); // 👈 Add this line

const userData = {
  name: "Luna",
  age: 12,
  hobby: "Drawing"
};

app.get('/api/profile', (req, res) => {
  res.json(userData);
});

app.listen(PORT, () => {
  console.log(`✅ API is running at http://localhost:${PORT}/api/profile`);
});
