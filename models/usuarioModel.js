const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required:[true, 'El nombre es obligatorio'],
    },
    carnet: {
        type: String,
        required:[true, 'El carnet es obligatorio'],
        unique: true
    },
    direccion: {
        type: String,
        required:[true, 'La direccion es obligatoria']
    },
    sexo: {
        type: String,
        required:[true, 'El Genero es obligatorio']
    },
    telefono: {
        type: Number,
        required:[true, 'El telefono es obligatorio']
    },
    fechaNacimiento: {
        type: String,
        required:[true, 'La fecha de nacimiento es obligatoria']
    },
    carrera: {
        type: String,
        required:[true, 'La carrera es obligatoria']
    },
    generoPoesia: {
        type: String,
        required:[true, 'El genero es obligatorio']
    },

});

module.exports = model('Usuario', UsuarioSchema)