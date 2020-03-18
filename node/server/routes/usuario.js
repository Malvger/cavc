const express = require('express');
//const bcrypt = require('bcrypt');

//const _ = require('underscore');

const Usuario = require('../models/usuario');
const { verificaToken, vefificaAdmin_Role } = require('../middlewares/autenticacion');
const app = express();

app.get('/usuario', verificaToken, (req, res) => {


    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    Usuario.find({ estado: true }, 'nombre email role estado google img')
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            Usuario.count({ estado: true }, (err, conteo) => {

                res.json({
                    ok: true,
                    usuarios,
                    cuantos: conteo
                });

            });

        });


    // res.json('getUsuario')
})
app.post('/usuario', [verificaToken, vefificaAdmin_Role], (req, res) => {


    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        // password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });

    // res.json({
    //     body
    // })
})

app.put('/usuario/:id', [verificaToken, vefificaAdmin_Role], (req, res) => {
    let id = req.params.id;
    // let body = req.body;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });


})
app.delete('/usuario/:id', [verificaToken, vefificaAdmin_Role], (req, res) => {
    let id = req.params.id;
    // Usuario.findByIdAndRemove(id, (err, UsurarioBorrado) => {
    let cambiaEstado = {
        estado: false
    };
    Usuario.findOneAndUpdate(id, cambiaEstado, { new: true }, (err, UsurarioBorrado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (!UsurarioBorrado) {
            return res.status(400).json({
                ok: false,
                error: { message: 'Usuario no encotrado' }
            });
        }
        res.json({
            ok: true,
            usuario: UsurarioBorrado
        });

    });

})

module.exports = app