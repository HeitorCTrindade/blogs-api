const PostService = require('../services/post.service');

const createBlogPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;
    const newPost = await PostService.createBlogPost({ userId, title, content, categoryIds });
    return res.status(201).json(newPost);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = {
  createBlogPost,
};