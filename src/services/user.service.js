const { User } = require('../models');

const getUsers = () => User.findAll();

const getByUserEmailAndPassword = (userEmail, userPassword) => 
  User.findOne({ where: { email: userEmail, password: userPassword } });
// const getByUserPassword = (userEmail) => User.findOne({ where: { userEmail } });

module.exports = {
  getUsers,
  getByUserEmailAndPassword,
};
