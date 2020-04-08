const jwt = require('jsonwebtoken');
let Insumo = require('../models/insumo');
let Equipo = require('../models/equipo');
let Menu = require('../models/menu');
let SubMenu = require('../models/submenu');



let verificaToken = (req, res, next) => {

    let token = req.get("token");

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token no Valido "
                }
            })
        }
        req.usuario = decoded.Usuario;
        next();

    });

}
let vefificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    console.log(usuario);
    if (usuario.perfil === '5e72bdece967740dd85f7351') { //modificar esta linea 
        next();

    } else {

        return res.json({
            ok: false,
            err: {
                message: "El Usuario no es administrador",
                usuario
            }
        });
    }


}
let verificaTokenImg = (req, res, next) => {
    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token no Valido "
                }
            })
        }
        req.usuario = decoded.Usuario;
        next();

    });
}





let verificaEstadoInsumo = (req, res, next) => {
    let id = req.params.id;
    Insumo.find({ _id: id, estado: true }, (err, data) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        if (JSON.stringify(data) === '[]') {
            return res.status(400).json({
                ok: false,
                err: 'Este Indumo ya no existe'
            });
        }
        next();
    });
}
let verificaEstadoMenu = (req, res, next) => {
    let id = req.params.id;
    Menu.find({ _id: id, estado: true }, (err, data) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        if (JSON.stringify(data) === '[]') {
            return res.status(400).json({
                ok: false,
                err: 'Este Menu ya no existe'
            });
        }
        next();
    });
}
let verificaEstadoSubMenu = (req, res, next) => {
    let id = req.params.id;
    SubMenu.find({ _id: id, estado: true }, (err, data) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        if (JSON.stringify(data) === '[]') {
            return res.status(400).json({
                ok: false,
                err: 'Este sub menu ya no existe'
            });
        }
        next();
    });
}


let verificaEstadoEquipo = (req, res, next) => {
    let id = req.params.id;
    Equipo.find({ _id: id, estado: true }, (err, data) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        if (JSON.stringify(data) === '[]') {
            return res.status(400).json({
                ok: false,
                err: 'Este equipo ya no existe'
            });
        }
        next();
    });
}

module.exports = {
    verificaToken,
    vefificaAdmin_Role,
    verificaTokenImg,
    verificaEstadoInsumo,
    verificaEstadoEquipo,
    verificaEstadoMenu,
    verificaEstadoSubMenu
}