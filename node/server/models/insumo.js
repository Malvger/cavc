const mongoose = require('mongoose')
const Schema = mongoose.Schema;


let medidasValidacion = {
    values: ['km', 'm', 'dm', 'cm', 'kg', 'g', 'l', 'oz', 'qq', 'm3', 'cm3'],
    message: '{VALUE} no es una medida aceptada'
}



let insumoSchema = new Schema({
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
    medida: {
        type: String,
        lowercase: true,
        unique: false,
        required: [true, 'La unidad de medida es necesaria'],
        enum: medidasValidacion,
    },
    estado: {
        type: Boolean,
        default: true
    }
});


module.exports = mongoose.model('Insumo', insumoSchema);