const Joi = require('joi');

function registerValidation(requestBody) {
  const userSchema = {
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    isCompany: Joi.boolean().required(),
  };

  return Joi.validate(requestBody, userSchema);
}

function loginValidation(requestBody) {
  const userSchema = {
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  };

  return Joi.validate(requestBody, userSchema);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
