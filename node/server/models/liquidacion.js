const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let liquidacionSchema = new Schema({
    nombrel: { type: String, required: [true, 'El Nombre Liquidacion es necesario'] },
    nombre: { type: Schema.Types.ObjectId, ref: 'RRHH' },
    proposito: { type: String, required: [true, 'El proposito es necesario'] },
    elaboro: { type: Schema.Types.ObjectId, ref: 'RRHH' },
    aprobo: { type: Schema.Types.ObjectId, ref: 'RRHH' },
    nolic: { type: String },
    fecha: { type: Date },
    estado: { type: Boolean, default: true },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
});


module.exports = mongoose.model('Liquidacion', liquidacionSchema);