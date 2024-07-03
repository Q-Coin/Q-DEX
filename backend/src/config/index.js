module.exports = {
    port: 3000,
    org0xApiUrl: 'https://api.example.com',
    org0xApiKey: "your-api-key",
    cors: {
      origins: ['*'],
      optionsSuccessStatus: 200,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: 'Content-Type,Authorization',
      credentials: true,
      preflightContinue: false
    }
  };
  