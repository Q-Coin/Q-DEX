const config = require('../config');

const injParam = (req, res, next) => {
  const endpoint = req.params[0];

  console.log(endpoint);
  if (endpoint.endsWith("price") || endpoint.endsWith("quote")) {
    req.query.excludedSources = config.excludedSources;
    req.query.skipValidation = config.skipValidation;
    req.query.priceImpactProtectionPercentage = config.priceImpactProtectionPercentage;
    req.query.feeRecipient = config.fees.feeRecipient;
    req.query.buyTokenPercentageFee = config.fees.buyTokenPercentageFee;
    req.query.feeRecipientTradeSurplus = config.fees.feeRecipientTradeSurplus;
  }

  next();
};

module.exports = injParam;
