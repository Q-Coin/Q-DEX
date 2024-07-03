const express = require('express');
const config = require('./config');
const apiRoutes = require('./routes/apiRoutes');
const app = express();

//import des middlewares
const cors = require('./middlewares/cors');
const logger = require('./middlewares/logger');
const ratelimits = require('./middlewares/ratelimit');

app.use(cors);
app.use(logger);
app.use(ratelimits);

app.use('/api', apiRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
