const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let rrhhSchema = new Schema({
    nombres: { type: String, required: [true, 'El nombre es necesario'] },
    apellidos: { type: String, required: [true, 'El apellidos es necesario'] },
    email: { type: String },
    dpi: { type: String, unique: true, required: [true, 'El dpi es necesario'] },
    telefonos: { type: String, required: [true, 'El telefonos es necesario'] },
    fecha: { type: Date },
    estado: { type: Boolean, default: true },
    planta: { type: String },
    area: { type: String },
    nit: { type: String },
    jornal: { type: Number },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
});


module.exports = mongoose.model('RRHH', rrhhSchema);