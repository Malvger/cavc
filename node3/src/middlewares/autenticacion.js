const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) => {

    let token = req.get("token");
    //console.log(token);
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
    verificaToken
}