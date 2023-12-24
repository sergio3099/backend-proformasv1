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
    valor: {
        type: Number,
        required: [true, 'El valor del vidrio es obligatorio']
    }, 
    estado: {
        type: Boolean,
        default: true,
        require: true
    }
})

module.exports = model('TipoVidrio', TipoVidrioSchema)