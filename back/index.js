const express = require("express");
const usuariosRouter = require('./api/usuarios/index.js')
const mensajesRouter = require('./api/mensajes/index.js')
const chatsRouter = require('./api/chats/index.js')
const app = express();
// var http = require('http').Server(app)
// var io = require('socket.io')(http);
app.use(express.json());

app.use('/api/usuarios', usuariosRouter);
app.use('/api/mensajes', mensajesRouter);
app.use('/api/chats', chatsRouter);

// io.on('connection', function (socket) {
//     console.log('a user connected');
// });

// app.get('/', function(req, res){
//     res.send('<h1>Hola mundo</h1>');
//   });
  

// http.listen(3000, function () {
//     console.log('listening on *:3000');
// });

app.listen(5000, (err) => {
    console.log('Servidor escuchando en el puerto 5000');
});