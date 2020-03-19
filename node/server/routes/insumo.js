const express = require('express');
let app = express();

let Insumo = require('../models/insumo');
let { verificaEstadoInsumo } = require('../middlewares/autenticacion');

// ============================
// Mostrar todos los insumos
// ============================

app.get('/insumo', (req, res) => {

    Insumo.find({ estado: true })
        .sort({ nombre: 'asc' })
        .exec((err, insumos) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                insumos
            });

        })
});

// ============================
// Mostrar un insumo por ID
// ============================
app.get('/insumo/:id', verificaEstadoInsumo, (req, res) => {
    let id = req.params.id;

    Insumo.findById(id, (err, insumoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!insumoDB) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'El ID no es correcto'
                }
            });
        }


        res.json({
            ok: true,
            insumo: insumoDB
        });

    });


});

// ============================
// Crear un nuevo insumo
// ============================

app.post('/insumo', (req, res) => {

    let body = req.body;

    let insumo = new Insumo({
        nombre: body.name,
        descripcion: body.descripcion,
        data: body.data,
        medida: body.medida
    });


    insumo.save((err, insumoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!insumoDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            insumo: insumoDB
        });
    });
});

// ============================
// Actualizar un insumo por id
// ============================
app.put('/insumo/:id', verificaEstadoInsumo, (req, res) => {

    let id = req.params.id;
    let body = req.body;

    Insumo.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, insumoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!insumoDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            message: 'Insumo modificado',
            insumoDB
        });

    });


});

// ============================
// Eliminar un insumo
// ============================

app.delete('/insumo/:id', (req, res) => {

    let id = req.params.id;

    let cambio = {
        estado: false
    }

    Insumo.findByIdAndUpdate(id, cambio, { new: true }, (err, insumoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!insumoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El id no existe'
                }
            });
        }

        res.json({
            ok: true,
            message: 'Insumo Borrada',
            insumoDB
        });
    });
});


module.exports = app;