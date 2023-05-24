const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let perfilSchema = new Schema({
    nombre: { type: String, unique: true, required: [true, 'El nombre es necesario'] },
    descripcion: { type: String, required: [true, 'El descripción es necesario'] },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    menus: [{ type: Schema.Types.ObjectId, ref: 'Menu' }],
    estado: { type: Boolean, default: true },
});


module.exports = mongoose.model('Perfil', perfilSchema);