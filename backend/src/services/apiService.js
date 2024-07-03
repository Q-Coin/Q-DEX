const axios = require('axios');
const config = require('../config');

const apiService = async (network, endpoint) => {
  const networkUrl = config.networks[network];

  if (!networkUrl) {
    throw new Error('Invalid network');
  }

  const response = await axios.get(`${networkUrl}${endpoint}`, {
    headers: {
      '0x-api-key': config.org0xApiKey
    }
  });

  return response.data;
};

module.exports = apiService;
