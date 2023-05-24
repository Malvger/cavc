const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let menuSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    descripcion: { type: String },
    class: { type: String },
    style: { type: String },
    url: { type: String },
    contener: { type: String },
    menu: { type: Schema.Types.ObjectId, ref: 'Menu' },
    estado: { type: Boolean, default: true },

});


module.exports = mongoose.model('SubMenu', menuSchema);