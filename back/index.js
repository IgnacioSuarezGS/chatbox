const express = require("express");
const usuariosRouter = require('./api/usuarios/index.js')
const mensajesRouter = require('./api/mensajes/index.js')
const chatsRouter = require('./api/chats/index.js')
const idiomasRouter = require('./api/idiomas/index.js')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
mongoose.connect('mongodb://localhost/chatboxdb')
app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRouter);
app.use('/api/mensajes', mensajesRouter);
app.use('/api/chats', chatsRouter);
app.use('/api/idiomas', idiomasRouter);


app.listen(5000, (err) => {
    console.log('Servidor escuchando en el puerto 5000');
});