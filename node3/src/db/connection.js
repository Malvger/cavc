const sql = require('mssql');

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

module.exports = {
    /**
     * 
     * @param {*} params 
     * @return {Promise.<mssql.ConnectionPool>}
     */
    getConnection: (params) => {
        try {
            const pool = new sql.connect(dbSettings); //await sql.connect(dbSettings);
            return pool;
        } catch (error) {
            console.error(error);
        }
    },
    sql: sql

};

//module.exports = { getConnection, sql };
//export { sql };