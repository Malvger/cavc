const express = require('express');
const app = express();


app.use(require('./usuario'));
app.use(require('./perfil'));
app.use(require('./login'));
app.use(require('./rrhh'));

module.exports = app