const express = require('express');
const connectDB = require('../config/db.config');
const userRoutes = require('./routes/userRoutes');

const app = express();
connectDB(); // Connect to MongoDB

app.use(express.json()); // Middleware to parse JSON

app.use('/api', userRoutes); // Define API routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});