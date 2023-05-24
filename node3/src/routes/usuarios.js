const { getUsuarios, addUsuario, getLogin } = require('../db/model/usuarios');
//const { getConnection, sql } = require('../db/connection');


const express = require('express');
const app = express();

app.get('/usuarios/', getUsuarios);
app.post('/usuarios/', addUsuario);
app.post('/login', getLogin);


module.exports = app;