const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const CONFIG_VARIABLES = require('../config/config');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  }
});

userSchema.methods.generateAuthToken = function() {
  return jwt.sign({ _id: this._id }, config.get(CONFIG_VARIABLES.jwtSecretKey));
};

const User = mongoose.model('User', userSchema);

module.exports = User;
