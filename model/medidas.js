const {Schema, model} = require ('mongoose')

const MedidasSchema = Schema ({
    alto: {
        type: Number,
        require: [true, 'El alto de la medida es obligatorio']
    },
    ancho: {
        type: Number,
        require: [true, 'El ancho de la medida es obligatorio']
    },
    grosorVidrio: {
        type: Number,
        require: [true, 'El grosor del vidrio es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    }

})

module.exports = model('Medida', MedidasSchema)