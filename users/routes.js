const router = require('express').Router();
const { registerValidation, loginValidation } = require('./validation');
const User = require('./user');
const { registerUser, findUser, authenticateUser } = require('./services');
const { RegisterUserDto } = require('./dto');
const { validateBody } = require('../middleware/validation');

router.post('/register', validateBody(registerValidation), async (req, res) => {
  const registeredUser = await findUser(req.body.email);
  if (registeredUser) {
    return res.status(400).send('User is already registered');
  }

  const user = await User.build(req.body);
  const newUser = await registerUser(user);

  res.send(new RegisterUserDto(newUser));
});

router.post('/login', validateBody(loginValidation), async (req, res) => {
  const { email, password } = req.body;

  const user = await authenticateUser(email, password);
  if (!user) {
    return res.status(400).send('Incorrect email or password');
  }

  res.send(user.generateAuthToken());
});

module.exports = router;
