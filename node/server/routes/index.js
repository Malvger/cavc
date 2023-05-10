const express = require('express');
const app = express();


app.use(require('./usuario'));
app.use(require('./perfil'));
app.use(require('./login'));
app.use(require('./rrhh'));
app.use(require('./trrhh'));
app.use(require('./insumo'));
app.use(require('./equipo'));
app.use(require('./menu'));
app.use(require('./submenu'));
app.use(require('./service'));
//app.use(require('./api/trrhh'));

module.exports = app