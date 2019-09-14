const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

class User {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }

  static async build(user) {
    const hashedPassword = await hashPassword(user.password);
    return new User({ ...user, password: hashedPassword })
  }
}

module.exports = User;
