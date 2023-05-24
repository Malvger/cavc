const express = require('express');
const app = express();


app.use(require('./usuarios'));
app.use(require('./menu'));


//routerdb
app.use(require('./routesdb/trrhh'));
app.use(require('./routesdb/crud2'));

//app.use(require('./api/trrhh'));

module.exports = app;