require('dotenv').config();
const express = require('express');
const config = require('config');
const CONFIG_VARIABLES = require('./config/config');
const logger = require('./utils/logger');
const setupRoutes = require('./setup/routes');
const setupDatabase = require('./setup/database');

const app = express();
setupRoutes(app);
setupDatabase();

const port = config.get(CONFIG_VARIABLES.port);
const server = app.listen(port, () => logger.info(`Listening on port ${port}`));

module.exports = server;
