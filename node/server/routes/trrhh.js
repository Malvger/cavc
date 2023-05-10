const express = require('express');

let { verificaToken, vefificaAdmin_Role } = require('../middlewares/autenticacion');

let app = express();

let TRRHH = require('../models/trrhh');

// ============================
// Mostrar todas las categorias
// ============================
app.get('/trrhh', verificaToken, (req, res) => {

    TRRHH.find({ estado: true })
        .sort('apellidos')
        .exec((err, trrhh) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                data: trrhh
            });

        });
});
app.get('/api/trrhh/:f1/:f2', (req, res) => {

    TRRHH.find({ estado: true })
        .sort('apellidos')
        .select("nombres apellidos dpi area comunidad  ")
        .exec((err, trrhh) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            //console.log(trrhh);
            res.json({
                ok: true,
                data: trrhh
            });

        });
});


// ============================
// Mostrar una categoria por ID
// ============================
app.get('/trrhh/:id', verificaToken, (req, res) => {
    // Categoria.findById(....);

    let id = req.params.id;

    TRRHH.findById(id, (err, trrhhDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!trrhhDB) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'El ID no es correcto'
                }
            });
        }


        res.json({
            ok: true,
            data: trrhhDB
        });

    });


});

// ============================
// Crear nuevo perfil
// ============================
app.post('/trrhh', verificaToken, (req, res) => {
    // regresa la nueva categoria
    // req.usuario._id
    let body = req.body;
    let error = '';
    //console.log(body, 'adddate');
    //string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    let nombres = body.nombres.charAt(0).toUpperCase() + body.nombres.slice(1).toLowerCase();
    let apellidos = body.apellidos.charAt(0).toUpperCase() + body.apellidos.slice(1).toLowerCase();
    let comunidad = body.comunidad.charAt(0).toUpperCase() + body.comunidad.slice(1).toLowerCase();
    let trrhh = new TRRHH({
        nombres,
        apellidos,
        comunidad,
        email: body.email,
        dpi: body.dpi,
        telefonos: body.telefonos,
        fecha: body.fecha,
        estado: body.estado,
        jornal: body.jornal,
        planta: body.planta,
        area: body.area,
        nit: body.nit,
        usuario: req.usuario._id
    });

    //console.log(trrhh, 'adddat2e');
    trrhh.save((err, trrhhDB) => {

        if (err) {

            if (err.code == 11000) {
                //console.log(JSON.stringify(err));
                body.error = "Campo duplicado " + JSON.stringify(err.keyValue);
                //console.log(body);
                return res.send({
                    ok: false,
                    data: body
                });
            }
        }

        if (!trrhhDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            data: trrhhDB
        });


    });


});

// ============================
// Mostrar todas las categorias
// ============================
app.put('/trrhh/:id', verificaToken, (req, res) => {

    let id = req.params.id;
    let body = req.body;
    let error = '';

    body.nombres = body.nombres.trim();
    body.apellidos = body.apellidos.trim();

    // console.log(body, 'update');
    TRRHH.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true }, (err, trrhhDB) => {

        if (err) {
            //console.log(String(err));
            body._id = id;
            if (err.code == 11000) {
                //console.log(err);
                body.error = "Campo duplicado " + JSON.stringify(err.keyValue);
                return res.send({
                    ok: false,
                    data: body
                });
            }
        }

        if (!trrhhDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        // console.log(rrhh);
        res.json({
            ok: true,
            data: trrhhDB,
        });

    });


});

// ============================
// Mostrar todas las categorias
// ============================
app.delete('/trrhh/:id', [verificaToken, vefificaAdmin_Role], (req, res) => {
    // solo un administrador puede borrar categorias
    // Categoria.findByIdAndRemove
    let id = req.params.id;

    let cambio = {
        estado: false
    }

    TRRHH.findByIdAndUpdate(id, cambio, { new: true }, (err, trrhhDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!trrhhDB) {
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
            data: trrhhDB
        });
    });
    //no



});


module.exports = app;