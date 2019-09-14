const mongoose = require('mongoose');
const config = require('config');
const CONFIG_VARIABLES = require('../config/config');
const logger = require('../utils/logger');

function setupDatabase() {
  const mongoDbUrl = config.get(CONFIG_VARIABLES.mongodbUrl);

  mongoose.set('useCreateIndex', true);
  mongoose.connect(
    mongoDbUrl,
    { useNewUrlParser: true },
  )
    .then(() => logger.info(`Successfully connected to ${mongoDbUrl}`))
    .catch(error => {
      logger.error('Failed to connect to MongoDB', error);
      process.exit(1);
    });
}

module.exports = setupDatabase;
