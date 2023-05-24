import { getConnection, sql } from './connection';

export const getUsuarios = async(req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM usuarios');

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.messge);
    }

};

export const addUsuario = async(req, res) => {

    const { nombre, perfil } = req.body;
    let { clave } = req.body;

    if (nombre == null || perfil == null) {
        return res.status(400).json({ msg: 'faltan campos' });
    }
    if (clave == null) clave = '0';
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("nombre", sql.Char, 'jmrl')
            .input("perfil", sql.Int, '1')
            .input("rrhh", sql.Int, '1')
            .query('INSERT INTO usuarios (nombre,perfil,rrhh) Values(@nombre,@perfil,@rrhh)');
        console.log(result);
        res.json({ nombre, perfil, clave });
    } catch (error) {
        res.status(500);
        res.send(error.messge);
    }
};