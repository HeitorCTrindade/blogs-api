const Sequelize = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');

const config = require('../config/config');

const env = 'development';

const sequelize = new Sequelize(config[env]);

const createBlogPost = async ({ userId, title, content, categoryIds }) => {
  const t = await sequelize.transaction();
  
  try {
    const blogPost = await BlogPost
      .create({ title, content, userId },
      { transaction: t, attributes: { includes: ['published'] } });

    const insertArray = categoryIds
      .map((category) => ({ postId: blogPost.id, categoryId: category }));    

    await PostCategory.bulkCreate(insertArray, { transaction: t });

    await t.commit();

    return blogPost;
  } catch (e) {    
    await t.rollback();
    console.log(e);
    throw e; 
  }
};

const getAllPosts = async () => BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });

module.exports = {
  createBlogPost,
  getAllPosts,
};
