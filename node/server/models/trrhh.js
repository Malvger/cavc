const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let trrhhSchema = new Schema({
    nombres: { type: String, required: [true, 'El nombre es necesario'] },
    apellidos: { type: String, required: [true, 'El apellidos es necesario'] },
    email: { type: String },
    dpi: { type: String, unique: true, required: [true, 'El dpi es necesario'] },
    comunidad: { type: String },
    telefonos: { type: String },
    jornal: { type: Number },
    planta: { type: String },
    area: { type: String },
    nit: { type: String },
    fecha: { type: Date },
    estado: { type: Boolean, default: true },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
});


module.exports = mongoose.model('TRRHH', trrhhSchema);