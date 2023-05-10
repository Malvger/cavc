const express = require('express');
const app = express();


app.use(require('./usuarios'));
//app.use(require('./api/trrhh'));

module.exports = app;