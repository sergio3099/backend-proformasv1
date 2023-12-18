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
    idProducto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: [true, 'El producto es obligatorio en la proforma']
    },
    idTipoVidrio: {
        type: Schema.Types.ObjectId,
        ref: 'TipoVidrio',
        required: [true, 'El Tipo de vidrio es obligatorio en la proforma']
    },
    idTipoAluminio: {
        type: Schema.Types.ObjectId,
        ref: 'TipoAluminio',
        required: [true, 'El tipo de aluminio es obligatorio en la proforma']
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
    }
})

module.exports = model('Proforma', ProformaSchema)