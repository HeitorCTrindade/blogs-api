const { Category } = require('../models');

const getCategories = async () => Category.findAll();

const creatCategory = async (name) => {
  const user = await Category.create({ name });
  return user;
};

const findAndCountCategorys = async (arr) => {
  const { count } = await Category.findAndCountAll({
    where: {
      id: arr,
    },    
  });
  return count;
};

module.exports = {
  getCategories,
  creatCategory,
  findAndCountCategorys,  
};
