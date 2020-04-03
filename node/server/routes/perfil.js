const express = require('express');

let { verificaToken, vefificaAdmin_Role } = require('../middlewares/autenticacion');

let app = express();

let Perfil = require('../models/perfil');

// ============================
// Mostrar todas las categorias
// ============================
app.get('/perfil', verificaToken, (req, res) => {

    Perfil.find({})
        .sort('descripcion')
        .populate('usuario', 'nombre email')
        .exec((err, perfil) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                perfil
            });

        });
});

// ============================
// Mostrar una categoria por ID
// ============================
app.get('/perfil/:id', verificaToken, (req, res) => {
    // Categoria.findById(....);

    let id = req.params.id;

    Perfil.findById(id, (err, perfilDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!perfilDB) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'El ID no es correcto'
                }
            });
        }


        res.json({
            ok: true,
            categoria: perfilDB
        });

    });


});

// ============================
// Crear nuevo perfil
// ============================
app.post('/perfil', verificaToken, (req, res) => {
    // regresa la nueva categoria
    // req.usuario._id
    let body = req.body;

    let perfil = new Perfil({
        nombre: body.nombre,
        descripcion: body.descripcion,
        usuario: req.usuario._id
    });


    perfil.save((err, perfilDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!perfilDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            perfil: perfilDB
        });


    });


});
app.post('/perfil/menu', verificaToken, async(req, res) => {
    //let id = req.params.id;
    let body = req.body;
    try {
        let perfil = await Perfil.findById(body.perfil);

        let m = perfil.menus;

        if (!m.includes(body.menu)) {
            perfil.menus.push(body.menu);
            perfil.save();
        }
        res.json({
            ok: true,
            perfil
        });
    } catch (err) {
        res.json({
            ok: false,
            err
        });
    }

});


// ============================
// Mostrar todas las categorias
// ============================
app.put('/perfil/:id', verificaToken, (req, res) => {

    let id = req.params.id;
    let body = req.body;

    let perfil = {
        nombre: body.nombre,
        descripcion: body.descripcion,
        usuario: req.usuario._id
    };

    Perfil.findOneAndUpdate(id, perfil, { new: true, runValidators: true }, (err, perfilDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!perfilDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoria: perfilDB
        });

    });


});

// ============================
// Mostrar todas las categorias
// ============================
app.delete('/perfil/:id', [verificaToken, vefificaAdmin_Role], (req, res) => {
    // solo un administrador puede borrar categorias
    // Categoria.findByIdAndRemove
    let id = req.params.id;

    Perfil.findByIdAndRemove(id, (err, perfilDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!perfilDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El id no existe'
                }
            });
        }

        res.json({
            ok: true,
            message: 'Perfil Borrada'
        });

    });


});


module.exports = app;