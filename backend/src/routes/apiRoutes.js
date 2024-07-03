const express = require('express');
const apiService = require('../services/apiService');
const router = express.Router();

router.get('/:network/*', async (req, res) => {
  const network = req.params.network;
  const endpoint = req.params[0] + (Object.keys(req.query).length ? '?' + new URLSearchParams(req.query).toString() : '');

  try {
    const data = await apiService(network, endpoint);
    res.json(data);
  } catch (error) {
    res.status(error.response.status || 500).json({ error: error.message });
  }
});

module.exports = router;
