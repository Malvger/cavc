const mongoose = require('mongoose')
const Schema = mongoose.Schema;


let equipoSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        unique: false,
        lowercase: true,
        required: [true, 'La descripciion es obligatoria']
    },
    data: {
        type: String,
        unique: false,
        required: false
    },
    noSerie: {
        type: String,
        unique: false,
        required: false
    },
    marca: {
        type: String,
        unique: false,
        lowercase: true,
        required: [true, 'La marca es obligatoria']
    },
    estado: {
        type: Boolean,
        default: true
    }
});


module.exports = mongoose.model('Equipo', equipoSchema);