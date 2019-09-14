const express = require('express');
require('express-async-errors');
const helmet = require('helmet');
const compression = require('compression');
const userRouter = require('../users/routes');
const errorHandler = require('../middleware/error');

function setupRoutes(app) {
  app.use(express.json());
  app.use(helmet());
  app.use(compression());

  app.use('/api/users', userRouter);

  app.use(errorHandler);
}

module.exports = setupRoutes;
