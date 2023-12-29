const {Schema, model} = require('mongoose')
const ProductoProforma = require('./ProductoProforma')


const  ProformaSchema = Schema({
    nombre: {
        type: String,
        require: [true,  'el nombre del cliente es obligatorio'],
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
    },
    email: {
        type: String
    },
    nickname: {
        type: String
    },
    precio: {
        type: Number,
        default: 0
    },
    productosProforma: [{
        type: Array,
        ref: 'ProductoProforma',
        // required: true
    }]


}, { timestamps: true})

module.exports = model('Proforma', ProformaSchema)