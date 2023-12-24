const {Schema, model} = require('mongoose')

const ProductoSchema = Schema ({
    nombre : {
        type: String,
        require: [true, 'El nombre del producto es obligatorio'],
        unique: true
    },
    descripcion: {
        type: String,
    }, 
    valor: {
        type: Number,
        required: [true, 'El valor del producto es obligatorio']
    }, 
    estado: {
        type: Boolean,
        default: true,
        require: true
    }
})

module.exports = model('Producto', ProductoSchema)