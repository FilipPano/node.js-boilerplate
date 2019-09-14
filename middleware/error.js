const logger = require('../utils/logger');

function errorHandler(e, req, res, next) {
  logger.error(e.message, e);
  res.status(500).send('Something failed while executing your request.');
}

module.exports = errorHandler;
