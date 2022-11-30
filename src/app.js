const express = require('express');
const controllers = require('./controllers');

// ...

const app = express();

app.use(express.json());

app.post('/login', controllers.login);

// ...
// VQV! Let'go
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
