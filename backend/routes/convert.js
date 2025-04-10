const express = require('express');
const router = express.Router();
const axios = require('axios');
const validateInput = require('../middleware/validateInput');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

router.post('/convert', validateInput, async (req, res) => {
  const { source, target, amount } = req.body;

  try {
    const { data } = await axios.get(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`);
    const rates = data.rates;

    const sourceRate = parseFloat(rates[source]);
    const targetRate = parseFloat(rates[target]);

    if (!sourceRate || !targetRate) {
      return res.status(400).json({ error: 'Invalid currency codes' });
    }

    const exchangeRate = targetRate / sourceRate;
    const convertedValue = amount * exchangeRate;

    res.json({
      source,
      target,
      amount,
      exchangeRate: exchangeRate.toFixed(6),
      convertedValue: convertedValue.toFixed(2)
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exchange rates' });
  }
});

module.exports = router;
