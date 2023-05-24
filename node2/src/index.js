import app from './app';

//import './db/connection';

app.use(require('./routes/index'));
// app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`);
});