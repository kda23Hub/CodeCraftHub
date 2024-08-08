const express = require('express');
const connectDB = require('../config/db.config');
const userRoutes = require('./routes/userRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});