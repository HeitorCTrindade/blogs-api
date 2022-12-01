const { User } = require('../models');
const jwtHelpers = require('../auth/jwtHelpers');

const getUsers = async () => User.findAll();

const getUserById = async (id) => User.findByPk(id);

const getByUserEmailAndPassword = async (userEmail, userPassword) => 
  User.findOne({ where: { email: userEmail, password: userPassword } });
// const getByUserPassword = (userEmail) => User.findOne({ where: { userEmail } });

const getByUserEmail = async (userEmail) => 
  User.findOne({ where: { email: userEmail } });

const creatUser = async (displayName, email, password, image = null) => {
  const user = await User.create({ displayName, email, password, image });
  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = jwtHelpers.createToken(userWithoutPassword);
  return token;
};

module.exports = {
  getUsers,
  getByUserEmailAndPassword,
  getByUserEmail,
  creatUser,
  getUserById,
};
