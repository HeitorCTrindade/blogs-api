const UserService = require('../services/user.service');

const creatUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await UserService.creatUser(displayName, email, password, image);
    res.status(201).json({ token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = {
  creatUser,
};
