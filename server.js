require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors());
app.use(express.json());
// Serves your existing HTML/CSS/JS files from the root or current directory:
app.use(express.static(__dirname));

app.use('/api', apiRoutes);
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => console.log(`Portfolio running at http://localhost:${PORT}`));
  })
  .catch(err => console.error('DB Connection error:', err.message));
