const mongoose = require('mongoose');

var usuariosSchema =  mongoose.Schema({
    nombre : String,
    idioma: String,
    isConnected: Boolean
});

var usuarioModel = mongoose.model('usuarios', usuariosSchema);

module.exports = usuarioModel;