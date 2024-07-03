module.exports = {
  port: 3000,
  org0xApiKey: "your-api-key",
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
