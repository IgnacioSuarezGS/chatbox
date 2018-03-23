const express = require("express");
const usuariosRouter = require('./api/usuarios/index.js')
const app = express();
app.use(express.json());

app.use('/api/usuarios', usuariosRouter);

app.listen(5000, (err) => {
    console.log('Servidor escuchando en el puerto 5000');
});