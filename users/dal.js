const User = require('./model');

async function createUser(user) {
  try {
    const newUser = new User(user);
    return await newUser.save()
  } catch (error) {
    throw new Error(error);
  }
}

async function getUser(email) {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports.createUser = createUser;
module.exports.getUser = getUser;
