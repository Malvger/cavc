const express = require('express');
//const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

const jwt = require('jsonwebtoken');

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const app = express();


app.post('/login', (req, res) => {

    let body = req.body;
    // console.log(body);
    // console.log(body.email);

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(200).json({
                ok: false,
                err
            });
        }
        if (!usuarioDB) {
            return res.status(200).json({
                ok: false,
                err: {
                    message: "(Usuario) o contraseña incorretos"
                }
            });
        }

        if (!(body.password === usuarioDB.password)) {

            return res.status(200).json({
                ok: false,
                err: {
                    message: "Usuario o (contraseña) incorretos"
                }
            });
        }
        // console.log(process.env.CADUCIDAD_TOKEN);
        let token = jwt.sign({
            Usuario: usuarioDB

        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        res.json({
            ok: true,
            id: usuarioDB._id,
            token
        });


    });

});

//configuraciones de Google
async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
    });
    const payload = ticket.getPayload();
    return {
        nombre: payload.name,
        email: payload.email,
        img: payload.picture,
        google: true
    };
}


app.post('/google', async(req, res) => {
    let idtoken = req.body.idtoken;
    let googleUser = await verify(idtoken)
        .catch(e => {
            return res.status(403).json({
                ok: false,
                err: e
            })

        })
    Usuario.findOne({ email: googleUser.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (usuarioDB) {
            if (usuarioDB.google === false) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: "Debe de usar su autenticacion normal "
                    }
                });
            } else {
                // console.log(process.env.CADUCIDAD_TOKEN);
                let token = jwt.sign({
                    Usuario: usuarioDB
                }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
                return res.json({
                    ok: true,
                    Usuario: usuarioDB,
                    token,
                });

            }
        } else {
            // se el usruario no exite 
            let usuario = new Usuario();
            usuario.nombre = googleUser.nombre;
            usuario.email = googleUser.email;
            usuario.img = googleUser.img;
            usuario.google = true;
            usuario.password = ':)';

            usuario.save((err, usuarioDB) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }

                let token = jwt.sign({
                    Usuario: usuarioDB
                }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
                return res.json({
                    ok: true,
                    Usuario: usuarioDB,
                    token,
                });
            });

        }
    });

});

module.exports = app