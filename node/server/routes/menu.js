const express = require('express');
let app = express();

let Menu = require('../models/menu');
let { verificaEstadoMenu } = require('../middlewares/autenticacion');

// ============================
// Mostrar todos los 
// ============================

app.get('/menu', (req, res) => {

    Menu.find({ estado: true })
        .sort({ nombre: 'asc' })
        .exec((err, menu) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                menu
            });

        })
});

// ============================
// Mostrar un por ID
// ============================
app.get('/menu/:id', verificaEstadoMenu, (req, res) => {
    let id = req.params.id;

    Menu.findById(id, (err, menuDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!menuDB) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'El ID no es correcto'
                }
            });
        }


        res.json({
            ok: true,
            menu: menuDB
        });

    });


});

// ============================
// Crear un nuevo 
// ============================

app.post('/menu', (req, res) => {

    let body = req.body;

    let menu = new Menu({
        nombre: body.nombre,
        descripcion: body.descripcion,
        class: body.class,
        style: body.style,
        url: body.url
    });


    menu.save((err, menuDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!menuDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            menu: menuDB
        });
    });
});


app.put('/menu/:id', verificaEstadoMenu, (req, res) => {

    let id = req.params.id;
    let body = req.body;

    Menu.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, menuDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!menuDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            message: 'Menu modificado',
            menuDB
        });

    });


});

// ============================
// Eliminar
// ============================

app.delete('/menu/:id', (req, res) => {

    let id = req.params.id;

    let cambio = {
        estado: false
    }

    Menu.findByIdAndUpdate(id, cambio, { new: true }, (err, menuDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!menuDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El id no existe'
                }
            });
        }

        res.json({
            ok: true,
            message: 'Menu Borrada',
            menuDB
        });
    });
});


module.exports = app;