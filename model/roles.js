const { Schema, model } = require('mongoose');

const RolesSchema = Schema({
    nombreRol: {
        type: String,
        require: [true, 'el nombre del rol es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
})

module.exports = model('Roles', RolesSchema)
