const { Schema, model } = require('mongoose')
const Producto = require('./producto')
const tipoVidrio  = require('./tipoVidrio')
const tipoAluminio = require('./tipoAluminio')

const ProductoProformaSchema = Schema({
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: [true, 'El producto es obligatorio']
    },
    tipoVidrio: {
        type: Schema.Types.ObjectId,
        ref: 'TipoVidrio',
        required: [true, 'El tipo de vidrio es obligatorio']
    },
    tipoAluminio: {
        type: Schema.Types.ObjectId,
        ref: 'TipoAluminio',
        required: [true, 'El tipo de aluminio es obligatorio']
    },
    alto: {
        type: Number,
        required: [true, 'El alto del producto es obligatorio en la proforma']
    },
    ancho: {
        type: Number,
        required: [true, 'El alto del producto es obligatorio en la proforma']
    },
    grosorVidrio: {
        type: Number,
        required: [true, 'El alto del producto es obligatorio en la proforma']
    },
    precio: {
        type: Number,
        default: 0
    }
})

module.exports = model('ProductoProforma', ProductoProformaSchema)