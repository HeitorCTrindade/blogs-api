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

const removePasswords = (array) => array.map(({ id, displayName, email, image }) =>
 ({ id, displayName, email, image }));

const getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();
    const usersWithoutPassword = removePasswords(users);
    res.status(200).json(usersWithoutPassword);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserService.getUserById(id);
    
    if (!user) res.status(404).json({ message: 'User does not exist' });

    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = {
  creatUser,
  getUsers,
  getUserById,
};
