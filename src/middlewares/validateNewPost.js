const Category = require('../services/category.service');

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(401).json({ message: 'Some required fields are missing' });
  }

  const count = Category.findAndCountCategorys(categoryIds);
  console.log(count);

  return next();
};