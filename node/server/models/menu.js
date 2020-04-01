const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let menuSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    descripcion: { type: String },
    class: { type: String },
    style: { type: String },
    url: { type: String },
    estado: { type: Boolean, default: true },
    submenus: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubMenu"
    }]

});


module.exports = mongoose.model('Menu', menuSchema);