const PostService = require('../services/post.service');

const getCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getCategories();
    return res.status(200).json(categories);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

const creatCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await CategoryService.creatCategory(name);
    return res.status(201).json(newCategory);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = {
  getCategories,
  creatCategory,  
};