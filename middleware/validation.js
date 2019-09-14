const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

function validateId(req, res, next) {
  const { error } = Joi.validate({ id: req.params.id }, { id: Joi.objectId().required() });
  if (error) return res.status(400).send(error.details[0].message);
  next();
}

function validateBody(validator) {
  return (req, res, next) => {
    const { error } = validator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
  }
}

module.exports.validateId = validateId;
module.exports.validateBody = validateBody;
