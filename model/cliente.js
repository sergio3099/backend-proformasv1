const { Schema, model} = require('mongoose')

const ClienteSchema = Schema({
    nombre: {
        type: String,
        require: [true,  'el nombre del cliente es obligatorio'],
        unique: true
    },
    apellido: {
        type: String,
        required: [true, 'El apellido del cliente es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    direccion: {
        type: String,
        required: [true, 'La dirección del cliente es obligatorio']
    },
    referencia: {
        type: String,
        require: [true, 'la referencia del cliente es obligatoria']
    },
    celular:{
        type: Number,
    }
})

module.exports = model('Cliente', ClienteSchema)