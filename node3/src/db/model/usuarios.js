//import { getConnection, sql } from './connection';
const { getConnection, sql } = require('../connection');
const querys = require('../querys');
const jwt = require('jsonwebtoken');

module.exports = {
    getUsuarios: async(req, res) => {
        try {
            const pool = await getConnection();
            const result = await pool.request().query(querys.getUsuarios);

            res.json(result.recordset);
        } catch (error) {
            res.status(500);
            res.send(error.messge);
            //console.log(error);
        }
    },
    addUsuario: async(req, res) => {

        const { nombre, perfil } = req.body;
        let { clave } = req.body;

        if (nombre == null || perfil == null) {
            return res.status(400).json({ msg: 'faltan campos' });
        }
        if (clave == null) clave = '0';
        try {
            const pool = await getConnection();
            const result = await pool.request()
                .input("nombre", sql.Char, nombre)
                .input("perfil", sql.Int, perfil)
                .input("rrhh", sql.Int, '1')
                .query(querys.addUsuario);
            //console.log(result);
            res.json({ nombre, perfil, clave });
        } catch (error) {
            //console.log(error);
            res.status(500);
            res.send(error.messge);
        }
    },
    getLogin: async(req, res) => {
        const { email, password } = req.body;
        //console.log(req.body);
        try {
            const pool = await getConnection();
            const result = await pool.request()
                .input("email", sql.Char, email)
                .input("password", sql.Char, password)
                .query(querys.getLogin);

            // res.json(result.recordset);


            if (result.recordset.length == 0) {
                res.json({
                    ok: false,
                    err: {
                        message: "Usuario o (contraseña) incorretos"
                    }
                });

            } else {
                let token = jwt.sign({
                    Usuario: result.recordset
                }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
                res.json({
                    ok: true,
                    id: 1,
                    token
                });
            }

            // console.log(result.recordset.length);
            // console.log(result.recordset);
        } catch (error) {
            // res.status(500);
            // res.send(error.messge);
            console.log(error);
            return res.status(500).json({
                ok: false,
                err: {
                    message: "Usuario o (contraseña) incorretos"
                }
            });
        }
    }

};