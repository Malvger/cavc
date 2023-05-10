const express = require('express');
let app = express();
let TRRHH = require('../../models/trrhh');


// ============================
// Mostrar todas las categorias
// ============================
app.get('api/trrhh', (req, res) => {

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