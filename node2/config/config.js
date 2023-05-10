process.env.PORT = process.env.PORT || 4000

// Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//base se datos

//vencimiento de Token
process.env.CADUCIDAD_TOKEN = '1h';

//google client id
process.env.CLIENT_ID = process.env.CLIENT_ID || '1027417648109-vri5c83mgnokn0qmuj9p1csebs6sii43.apps.googleusercontent.com'


// SEED 

process.env.SEED = process.env.SEED || 'secret';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://192.168.20.3:27017/cavc';
    //urlDB = 'mongodb://192.168.21.2:27017/cavc';
    // urlDB = 'mongodb://181.174.109.98:27017/cavc'; 
} else {
    urlDB = process.env.MONGO_URL
}

process.env.URLDB = urlDB;