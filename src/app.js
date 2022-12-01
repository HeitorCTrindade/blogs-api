const express = require('express');
const controllers = require('./controllers');
const validateNewUser = require('./middlewares/validadeNewUser');

// ...

const app = express();

app.use(express.json());

app.post('/user', validateNewUser, controllers.user.creatUser);
app.post('/login', controllers.login);

// ...
// VQV! Let'go
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
