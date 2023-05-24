const express = require('express');

let { verificaToken, vefificaAdmin_Role } = require('../middlewares/autenticacion');

let app = express();

let RRHH = require('../models/liquidacion');

// ============================
// Mostrar todas las categorias
// ============================
app.get('/liquidacion', verificaToken, (req, res) => {

    RRHH.find({ estado: true })
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
                data: rrhh
            });

        });
});

// ============================
// Mostrar una categoria por ID
// ============================
app.get('/liquidacion/:id', verificaToken, (req, res) => {
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
            data: rrhhDB
        });

    });


});

// ============================
// Crear nuevo perfil
// ============================
app.post('/liquidacion', verificaToken, (req, res) => {
    // regresa la nueva categoria
    // req.usuario._id
    let body = req.body;
    console.log(body, 'adddate');
    //string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    let nombres = body.nombres.charAt(0).toUpperCase() + body.nombres.slice(1).toLowerCase();
    let apellidos = body.apellidos.charAt(0).toUpperCase() + body.apellidos.slice(1).toLowerCase();
    let rrhh = new RRHH({
        nombres,
        apellidos,
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
app.put('/liquidacion/:id', verificaToken, (req, res) => {

    let id = req.params.id;
    let body = req.body;
    // console.log(body, 'update');
    RRHH.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true }, (err, rrhhDB) => {

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
        // console.log(rrhh);
        res.json({
            ok: true,
            rrhh: rrhhDB
        });

    });


});

// ============================
// Mostrar todas las categorias
// ============================
app.delete('/liquidacion/:id', [verificaToken, vefificaAdmin_Role], (req, res) => {
    // solo un administrador puede borrar categorias
    // Categoria.findByIdAndRemove
    let id = req.params.id;

    let cambio = {
        estado: false
    }

    RRHH.findByIdAndUpdate(id, cambio, { new: true }, (err, rrhhDB) => {

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
            message: 'Registro Borrado',
            rrhhDB
        });
    });
    //no



});


module.exports = app;