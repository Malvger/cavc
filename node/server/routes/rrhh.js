const express = require('express');

let { verificaToken, vefificaAdmin_Role } = require('../middlewares/autenticacion');

let app = express();

let RRHH = require('../models/rrhh');

// ============================
// Mostrar todas las categorias
// ============================
app.get('/rrhh', verificaToken, (req, res) => {

    RRHH.find({})
        .sort('apellidos')
        .exec((err, rrhh) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                rrhh
            });

        });
});

// ============================
// Mostrar una categoria por ID
// ============================
app.get('/rrhh/:id', verificaToken, (req, res) => {
    // Categoria.findById(....);

    let id = req.params.id;

    RRHH.findById(id, (err, rrhhDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!rrhhDB) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'El ID no es correcto'
                }
            });
        }


        res.json({
            ok: true,
            categoria: rrhhDB
        });

    });


});

// ============================
// Crear nuevo perfil
// ============================
app.post('/rrhh', verificaToken, (req, res) => {
    // regresa la nueva categoria
    // req.usuario._id
    let body = req.body;

    let rrhh = new RRHH({
        nombres: body.nombres,
        apellidos: body.apellidos,
        email: body.email,
        dpi: body.dpi,
        telefonos: body.telefonos,
        fecha: body.fecha,
        estado: body.estado,
        usuario: req.usuario._id
    });


    rrhh.save((err, rrhhDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!rrhhDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            rrhh: rrhhDB
        });


    });


});

// ============================
// Mostrar todas las categorias
// ============================
app.put('/rrhh/:id', verificaToken, (req, res) => {

    let id = req.params.id;
    let body = req.body;

    let rrhh = {
        nombres: body.nombres,
        apellidos: body.apellidos,
        email: body.email,
        telefonos: body.telefonos,
        dpi: body.dpi,
        fecha: body.fecha,
        estado: body.estado,
        usuario: req.usuario._id
    };

    RRHH.findOneAndUpdate(id, rrhh, { new: true, runValidators: true }, (err, rrhhDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!rrhhDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            rrhh: rrhhDB
        });

    });


});

// ============================
// Mostrar todas las categorias
// ============================
app.delete('/rrhh/:id', [verificaToken, vefificaAdmin_Role], (req, res) => {
    // solo un administrador puede borrar categorias
    // Categoria.findByIdAndRemove
    let id = req.params.id;

    RRHH.findByIdAndRemove(id, (err, rrhhDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!rrhhDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El id no existe'
                }
            });
        }

        res.json({
            ok: true,
            message: 'rrhh Borrada'
        });

    });


});


module.exports = app;