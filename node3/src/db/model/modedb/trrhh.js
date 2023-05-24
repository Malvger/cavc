//import { getConnection, sql } from './connection';
const { getConnection, sql } = require('../../connection');
const querys = require('../../querys');
const jwt = require('jsonwebtoken');

module.exports = {
    getTrrhh: async(req, res) => {
        try {
            const pool = await getConnection();
            const result = await pool.request().query(querys.getTrrhh);

            //res.json(result.recordset);
            res.json({
                ok: true,
                data: result.recordset
            });
        } catch (error) {
            res.status(500);
            res.send(error.messge);
            //console.log(error); 
        }
    },
    getTrrhhE: async(req, res) => {
        try {
            let id = req.params.id;
            const pool = await getConnection();
            const result = await pool.request()
                .input("id", sql.Int, id)
                .query(querys.getTrrhhE);

            //res.json(result.recordset);
            res.json({
                ok: true,
                data: result.recordset
            });
        } catch (error) {
            res.status(500);
            res.send(error.messge);
            //console.log(error); 
        }
    },
    putTrrhhE: async(req, res) => {
        try {
            let id = req.params.id;
            let body = req.body;
            let error = '';
            body.nombres = body.nombres.trim();
            body.apellidos = body.apellidos.trim();

            const pool = await getConnection();
            const result = await pool.request()
                .input("id", sql.Int, id)
                .input("dpi", sql.VarChar, body.dpi)
                .input("nombre", sql.VarChar, body.nombres)
                .input("apellido", sql.VarChar, body.apellidos)
                .input("comunidad", sql.VarChar, body.comunidad)
                .input("jornal", sql.VarChar, body.jornal)
                .input("planta", sql.Int, body.planta)
                .input("area", sql.Int, body.area)
                .query(querys.putTrrhhE);

            console.log(body);
            //res.json(result.recordset);
            res.json({
                ok: true,
                data: result.recordset[0]
            });
        } catch (error) {
            res.status(500);
            res.send(error.messge);
            console.log(error);
        }
    },
    delTrrhhE: async(req, res) => {
        try {
            let id = req.params.id;
            const pool = await getConnection();
            const result = await pool.request()
                .input("id", sql.Int, id)
                .query(querys.delTrrhhE);

            //res.json(result.recordset);
            res.json({
                ok: true,
                data: result.recordset
            });
        } catch (error) {
            res.status(500);
            res.send(error.messge);
            //console.log(error); 
        }
    },

};