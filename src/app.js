const express = require('express');
const controllers = require('./controllers');
const validateNewUser = require('./middlewares/validadeNewUser');
const validadeToken = require('./middlewares/validadeToken');
const validateNewCategory = require('./middlewares/validateNewCategory');
const validateNewPost = require('./middlewares/validateNewPost');
const validateUpdatePost = require('./middlewares/validateUpdatePost');

// ...

const app = express();

app.use(express.json());

app.get('/user', validadeToken, controllers.user.getUsers);
app.get('/user/:id', validadeToken, controllers.user.getUserById);
app.post('/user', validateNewUser, controllers.user.creatUser);
app.delete('/user/me', validadeToken, controllers.user.deleteOwnUser);

app.post('/login', controllers.login);

app.get('/categories', validadeToken, controllers.category.getCategories);
app.post('/categories', validadeToken, validateNewCategory, controllers.category.creatCategory);

app.post('/post', validadeToken, validateNewPost, controllers.post.createBlogPost);
app.get('/post', validadeToken, controllers.post.getAllPosts);
app.get('/post/:id', validadeToken, controllers.post.getPostById);
app.put('/post/:id', validadeToken, validateUpdatePost, controllers.post.updatePostById);
app.delete('/post/:id', validadeToken, controllers.post.deletePostById);
app.get('/post/search', validadeToken, controllers.post.getAllPostsByTerm);

// ...
// VQV! Let'go
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
