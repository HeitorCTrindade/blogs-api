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

const getAllPosts = async (req, res) => {
  try {
    const posts = await PostService.getAllPosts();
    return res.status(200).json(posts);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostService.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const { id: userId } = req.user;

    const [post] = await PostService.updatePostById(id, userId, title, content);
    if (post === 0) return res.status(401).json({ message: 'Unauthorized user' });
    await getPostById(req, res);    
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
  updatePostById,
};