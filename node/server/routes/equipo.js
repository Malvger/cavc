const express = require('express');
let app = express();

let Equipo = require('../models/equipo');
let { verificaEstadoEquipo, cors } = require('../middlewares/autenticacion');

// ============================
// Mostrar todos los insumos
// ============================


app.get('/equipo', (req, res) => {

    Equipo.find({ estado: true })
        .sort({ nombre: 'asc' })
        .exec((err, equipos) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                equipos
            });

        })
});

// ============================
// Mostrar un insumo por ID
// ============================
app.get('/equipo/:id', verificaEstadoEquipo, (req, res) => {
    let id = req.params.id;

    Equipo.findById(id, (err, equipoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!equipoDB) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'El ID no es correcto'
                }
            });
        }


        res.json({
            ok: true,
            insumo: equipoDB
        });

    });


});

// ============================
// Crear un nuevo insumo
// ============================

app.post('/equipo', (req, res) => {

    let body = req.body;

    let equipo = new Equipo({
        nombre: body.name,
        descripcion: body.descripcion,
        data: body.data,
        noSerie: body.noSerie,
        marca: body.marca
    });


    equipo.save((err, equipoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!equipoDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            equipo: equipoDB
        });
    });
});

// ============================
// Actualizar un insumo por id
// ============================
app.put('/equipo/:id', verificaEstadoEquipo, (req, res) => {

    let id = req.params.id;
    let body = req.body;

    Equipo.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, equipoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!equipoDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            message: 'Insumo modificado',
            equipo: equipoDB
        });

    });


});

// ============================
// Eliminar un insumo
// ============================

app.delete('/equipo/:id', verificaEstadoEquipo, (req, res) => {

    let id = req.params.id;

    let cambio = {
        estado: false
    }

    Equipo.findByIdAndUpdate(id, cambio, { new: true }, (err, equipoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!equipoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El id no existe'
                }
            });
        }

        res.json({
            ok: true,
            message: 'Equipo Borrada',
            equipo: equipoDB
        });
    });
});


module.exports = app;