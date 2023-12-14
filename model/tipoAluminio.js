const {Schema, model} = require('mongoose')

const TipoAluminioSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre del tipo de aluminio es obligatorio'],
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

module.exports = model('TipoAluminio', TipoAluminioSchema)