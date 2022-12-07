const Category = require('../services/category.service');

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const nCategorysFindInDatabase = await Category.findAndCountCategorys(categoryIds);
  
  if (nCategorysFindInDatabase !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  return next();
};