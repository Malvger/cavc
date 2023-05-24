//import sql from 'mssql';
const sql = require('mssql')
const dbSettings = {
    user: 'sa',
    password: 'mGtUtN7p',
    server: '192.168.20.3',
    database: 'cavc',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}

export async function getConnection(params) {

    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }

}

export { sql }