const { getTrrhh, getTrrhhE, putTrrhhE, delTrrhhE } = require('../../db/model/modedb/trrhh');
//const { getConnection, sql } = require('../db/connection');


const express = require('express');
const { verificaToken } = require('../../middlewares/autenticacion');
const app = express();

app.get('/trrhh/', getTrrhh);
app.get('/trrhh/:id', verificaToken, getTrrhhE);
app.put('/trrhh/:id', verificaToken, putTrrhhE);
app.post('/trrhh/', verificaToken, putTrrhhE);
app.delete('/trrhh/:id', verificaToken, delTrrhhE);
// app.post('/usuarios/', addUsuario);
// app.post('/login', getLogin);


module.exports = app;