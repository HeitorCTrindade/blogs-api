const jwtHelpers = require('../auth/jwtHelpers');
const UserService = require('../services/user.service');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const decodedToken = jwtHelpers.decodeToken(token);
    
  if (decodedToken.isError === true) {
    return res
      .status(401)
      .json({ message: 'Expired or invalid token' });
  }

  const user = UserService.getByUserEmail(decodedToken.data.email);
  
  if (!user) {
    return res
      .status(401)
      .json({ message: 'Expired or invalid token' });
  }
    
  return next();
};