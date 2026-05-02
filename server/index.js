require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Middleware
app.use(cors());
app.use(express.json());

// 2. Routes
app.use('/api/contact', contactRoutes);

// Health check to test if server is alive
app.get('/api/health', (req, res) => {
  res.json({ status: 'Vela API is running 🚀' });
});

// 3. Start Server (No MongoDB needed)
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Ready to send emails via ${process.env.EMAIL_USER}`);
});