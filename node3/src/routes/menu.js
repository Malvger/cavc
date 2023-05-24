// const { getUsuarios, addUsuario, getLogin } = require('../db/model/usuarios');
//const { getConnection, sql } = require('../db/connection');
const { getMenus } = require('../db/model/menu');


const express = require('express');
const app = express();


app.post('/menu', getMenus);


module.exports = app;