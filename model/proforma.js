const {Schema, model} = require('mongoose')

const  ProformaSchema = Schema({
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
    },
    producto:{
        type: Number,
    },
    vidrio:{
        type: Number,
    },
    aluminio:{
        type: Number,
    },    
    alto:{
        type: Number,
        required: [true, 'El alto del producto es obligatorio en la proforma']
    },
    ancho:{
        type: Number,
        required: [true, 'El alto del producto es obligatorio en la proforma']
    },
    grosorVidrio:{
        type: Number,
        required: [true, 'El alto del producto es obligatorio en la proforma']
    },
    email: {
        type: String
    }
})

module.exports = model('Proforma', ProformaSchema)