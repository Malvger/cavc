const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    email: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    rrhh: { type: Schema.Types.ObjectId, ref: 'RRHH', required: [true, 'El rrhh es obligatoria'] },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] },
    img: { type: String, required: false },
    perfil: { type: Schema.Types.ObjectId, ref: 'Perfil', default: '5e728d8729d0282ef04839e5', required: [true, 'El perfil es obligatoria'] },
    // perfil: { type: String, default: 'USER_ROLE', enum: rolesValidos },
    estado: { type: Boolean, default: true },
    google: { type: Boolean, default: false }
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);