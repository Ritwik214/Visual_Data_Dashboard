const express = require('express');
const DashboardData = require('../models/DashboardData');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const filters = req.query || {};
    const data = await DashboardData.find(filters).exec();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
