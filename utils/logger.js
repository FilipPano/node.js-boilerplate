const winston = require('winston');

const logger =  winston.createLogger({
  transports: new winston.transports.Console(),
});

logger.exceptions.handle(new winston.transports.Console());

module.exports = logger;
