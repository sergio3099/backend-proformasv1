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
    estado: {
        type: Boolean,
        default: true,
        require: true
    }
})

module.exports = model('Producto', ProductoSchema)