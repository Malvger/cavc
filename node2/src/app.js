import express from 'express';
import config from './config'
// import

const app = express();

app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;