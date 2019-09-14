class RegisterUserDto {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
  }
}

module.exports.RegisterUserDto = RegisterUserDto;
