const cors = require('cors');
const config = require('../config');
corsConfig = config.cors;

const corsOptions = {
  origin: (origin, callback) => {
    if (corsConfig.origins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: corsConfig.optionsSuccessStatus,
  methods: corsConfig.methods,
  allowedHeaders: corsConfig.allowedHeaders,
  credentials: corsConfig.credentials,
  preflightContinue: corsConfig.preflightContinue
};

module.exports = cors(corsOptions);