const mongoose = require('mongoose');

var usuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El campo nombre es necesario']
    },
    lang: {
        type: String,
        enum: ['es','en','de','fr'],
        required: [true, 'El campo lang es necesario']
    },
    isConnected: { 
        type: Boolean,
        default: true 
    },
    img: {
        type: String
    }
});

var usuarioModel = mongoose.model('usuarios', usuariosSchema);

module.exports = usuarioModel;