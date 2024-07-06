module.exports = {
  port: 3000,
  org0xApiKey: "296a9e73-7415-4ac2-b5e6-fd8b02487ec4",
  excludedSources: "",
  skipValidation: false,
  priceImpactProtectionPercentage: 1.0,
  fees: {
    feeRecipient: "0xB0A45A799a8642a56F87F776b4D8A7603108b14b",
    buyTokenPercentageFee: 0.5,
    feeRecipientTradeSurplus: "0xB0A45A799a8642a56F87F776b4D8A7603108b14b"
  },
  cors: {
    origins: ['*'],
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    preflightContinue: false
  },
  networks: {
      ethereum: 'https://api.0x.org/',
      sepolia: 'https://sepolia.api.0x.org/',
      polygon: 'https://polygon.api.0x.org/',
      bsc: 'https://bsc.api.0x.org/',
      optimism: 'https://optimism.api.0x.org/',
      fantom: 'https://fantom.api.0x.org/',
      celo: 'https://celo.api.0x.org/',
      avalanche: 'https://avalanche.api.0x.org/',
      arbitrum: 'https://arbitrum.api.0x.org/',
      base: 'https://base.api.0x.org/'
  }
};
