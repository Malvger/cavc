require('./config/config')

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'token');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/index'));
app.use(express.static('public'));

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,

    //user: 'soporte',
    //pass: '*Malvger2020',
    user: 'root',
    pass: 'mGtUtN7p',
    authSource: 'admin',


};
mongoose.connect(process.env.URLDB, options,
    (err, res) => {
        if (err) throw err;
        console.log('base de datos ONLINE');
    });

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`);
});