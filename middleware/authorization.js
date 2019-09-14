const jwt = require('jsonwebtoken');
const config = require('config');
const CONFIG_VARIABLES = require('../config/config');

function authorize(req, res, next) {
  const token = req.header(CONFIG_VARIABLES.headerAuthToken);
  if (!token) return res.status(401).send('Access denied. No token provided');

  try {
    req.user = jwt.verify(token, config.get(CONFIG_VARIABLES.jwtSecretKey));
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
}

module.exports = authorize;
