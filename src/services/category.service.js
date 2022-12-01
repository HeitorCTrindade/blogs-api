const { Category } = require('../models');

const getCategories = async () => Category.findAll();

const creatCategory = async (name) => {
  const user = await Category.create({ name });
  return user;
};

module.exports = {
  getCategories,
  creatCategory,  
};
