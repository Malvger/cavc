const express = require('express');
let app = express();

let SubMenu = require('../models/submenu');
let Menu = require('../models/menu');
let { verificaEstadoSubMenu } = require('../middlewares/autenticacion');

// ============================
// Mostrar todos los 
// ============================

app.get('/submenu', (req, res) => {

    SubMenu.find({ estado: true })
        .sort({ nombre: 'asc' })
        .exec((err, submenu) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                submenu
            });

        })
});

// ============================
// Mostrar un por ID
// ============================
app.get('/submenu/:id', verificaEstadoSubMenu, (req, res) => {
    let id = req.params.id;

    SubMenu.findById(id, (err, submenuDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!submenuDB) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'El ID no es correcto'
                }
            });
        }


        res.json({
            ok: true,
            submenu: submenuDB
        });

    });


});

// ============================
// Crear un nuevo 
// ============================

app.post('/submenu', (req, res) => {

    let body = req.body;

    let submenu = new SubMenu({
        nombre: body.nombre,
        descripcion: body.descripcion,
        class: body.class,
        style: body.style,
        menu: body.menu,
        url: body.url
    });


    submenu.save((err, submenuDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!submenuDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            submenu: submenuDB
        });
    });
});


app.put('/submenu/:id', verificaEstadoSubMenu, (req, res) => {

    let id = req.params.id;
    let body = req.body;

    SubMenu.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, submenuDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!submenuDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            message: 'Submenu modificado',
            submenuDB
        });

    });


});

// ============================
// Eliminar
// ============================

app.delete('/submenu/:id', (req, res) => {

    let id = req.params.id;

    let cambio = {
        estado: false
    }

    Menu.findByIdAndUpdate(id, cambio, { new: true }, (err, submenuDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!submenuDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El id no existe'
                }
            });
        }

        res.json({
            ok: true,
            message: 'Submenu Borrada',
            submenuDB
        });
    });
});


module.exports = app;