const config = include('../config')

const injParam = (req, res, next) => {
  const network = req.params.network;
  const endpoint = req.params[0];

  // Exemple: Injecter ou remplacer des paramètres pour certains endpoints
  if (
    endpoint.endsWith("price") || endpoint.endsWith("quote")
  ) {
    req.params.excludedSources = config.excludedSources;
    req.params.skipValidation = config.skipValidation;
    req.params.priceImpactProtectionPercentage = config.priceImpactProtectionPercentage;
    req.params.feeRecipient = config.fees.feeRecipient;
    req.params.buyTokenPercentageFee = config.fees.buyTokenPercentageFee;
    req.params.feeRecipientTradeSurplus = config.fees.feeRecipientTradeSurplus;
  }

  next();
};

module.exports = injParam;