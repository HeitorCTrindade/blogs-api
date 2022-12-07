const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');
require('dotenv/config');

const secret = process.env.JWT_SECRET;

const isBodyValid = (email, password) => email && password;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    // igualar tokens. 
    const user = await UserService.getByUserEmailAndPassword(email, password);
  
    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' }); 
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: { email, id: user.id } }, secret, jwtConfig);
  
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
