const express = require('express');
const DashboardData = require('../models/DashboardData');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const endYearOptions = await DashboardData.distinct('end_year').exec();
    const topicsOptions = await DashboardData.distinct('topic').exec();
    const sectorOptions = await DashboardData.distinct('sector').exec();
    const regionOptions = await DashboardData.distinct('region').exec();
    const pestleOptions = await DashboardData.distinct('pestle').exec();
    const sourceOptions = await DashboardData.distinct('source').exec();
    const swotOptions = await DashboardData.distinct('swot').exec();
    const countryOptions = await DashboardData.distinct('country').exec();
    const cityOptions = await DashboardData.distinct('city').exec();

    const filterOptions = {
      endYear: endYearOptions.map(String), 
      topic: topicsOptions.map(String),
      sector: sectorOptions.map(String),
      region: regionOptions.map(String),
      pestle: pestleOptions.map(String),
      source: sourceOptions.map(String),
      swot: swotOptions.map(String),
      country: countryOptions.map(String),
      city: cityOptions.map(String),
    };

    res.json(filterOptions);
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
