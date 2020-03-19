const jwt = require('jsonwebtoken');

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
    if (usuario.perfil === '5e72844f29d0282ef04839e3') { //modificar esta linea 
        next();

    } else {

        return res.json({
            ok: false,
            err: {
                message: "El Usuario no es administrador"
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
module.exports = {
    verificaToken,
    vefificaAdmin_Role,
    verificaTokenImg

}