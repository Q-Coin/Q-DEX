const express = require('express');
const apiService = require('../services/apiService');
const router = express.Router();
const injParam = require('../middlewares/injParam');

router.get('/swap/:network/*', injParam, async (req, res) => {
  const network = req.params.network;
  const endpoint = req.params[0] + (Object.keys(req.query).length ? '?' + new URLSearchParams(req.query).toString() : '');

  try {
    const data = await apiService(network, endpoint);
    res.json(data);
  } catch (error) {
    res.status(error.response.status || 500).json({ error: error.message });
  }
});

router.get('/explorer/:network/*', async (req, res) => {
  const network = req.params.network;
  const endpoint = req.params[0] + (Object.keys(req.query).length ? '?' + new URLSearchParams(req.query).toString() : '');

  try {
    res.json({ error: 'Not implemented' });
  } catch (error) {
    res.status(error.response.status || 500).json({ error: error.message });
  }
});


module.exports = router;
