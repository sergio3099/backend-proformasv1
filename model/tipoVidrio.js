const {Schema, model} = require('mongoose')

const TipoVidrioSchema = Schema ({
    nombre: {
        type: String,
        require: [true, 'El nombre del tipo de vidrio es obligatorio'],
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

module.exports = model('TipoVidrio', TipoVidrioSchema)