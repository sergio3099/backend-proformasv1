const {Schema, model} = require('mongoose')

const  ProformaSchema = Schema({
    idCliente:{
        type: Schema.Types.ObjectId,
        ref:'Cliente',
        required: [true, 'El cliente es obligatorio en la proforma']
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
    idMedida: {
        type: Schema.Types.ObjectId,
        ref: 'Medida',
        required: [true, 'Las medidas son obligatorias en la proforma']
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    }
})

module.exports = model('Proforma', ProformaSchema)