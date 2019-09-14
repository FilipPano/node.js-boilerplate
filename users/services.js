const bcrypt = require('bcrypt');
const { createUser, getUser } = require('./dal');

async function registerUser(user) {
  return await createUser(user);
}

async function findUser(email) {
  return await getUser(email);
}

async function authenticateUser(email, password) {
  const user = await findUser(email);
  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return null;
  }

  return user;
}

module.exports.registerUser = registerUser;
module.exports.findUser = findUser;
module.exports.authenticateUser = authenticateUser;
