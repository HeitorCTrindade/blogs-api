const express = require('express');
const controllers = require('./controllers');
const validateNewUser = require('./middlewares/validadeNewUser');
const validadeToken = require('./middlewares/validadeToken');

// ...

const app = express();

app.use(express.json());

app.get('/user', validadeToken, controllers.user.getUsers);
app.get('/user/:id', validadeToken, controllers.user.getUserById);
app.post('/user', validateNewUser, controllers.user.creatUser);
app.post('/login', controllers.login);

// ...
// VQV! Let'go
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
