const isValidEmail = (inputEmail) => String(inputEmail)
  .toLowerCase().match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);

const UserService = require('../services/user.service');

module.exports = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  
  if (password.length < 6) {
    return res
      .status(400).json({ message: '"password" length must be at least 6 characters long' });
  } 

  if (displayName.length < 8) {
    return res
      .status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  } 

  if (!isValidEmail(email)) {
    return res
      .status(400).json({ message: '"email" must be a valid email' });
  } 

  const user = await UserService.getByUserEmail(email);

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  } 

  return next();
};
