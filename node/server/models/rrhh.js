const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let rrhhSchema = new Schema({
    nombres: { type: String, required: [true, 'El nombre es necesario'] },
    apellidos: { type: String, required: [true, 'El apellidos es necesario'] },
    email: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    dpi: { type: String, unique: true, required: [true, 'El dpi es necesario'] },
    telefonos: { type: String, required: [true, 'El telefonos es necesario'] },
    fecha: { type: Date },
    estado: { type: Boolean, default: true },

});

usuarioSchema.methods.toJSON = function() {
    let rrhh = this;
    let rrhhObject = rrhh.toObject();
    delete rrhhObject.password;
    return rrhhObject;
}

rrhhSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('RRHH', rrhhSchema);