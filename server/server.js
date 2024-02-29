const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dashboardRoutes = require('./routes/dashboardRoutes');
const filterOptionsRoutes = require('./routes/filterOptionsRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const mongoDBUrl = 'mongodb://127.0.0.1:27017/dashboardDB';

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(5000, () => console.log('Server started on port 5000'));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/filter-options', filterOptionsRoutes);
