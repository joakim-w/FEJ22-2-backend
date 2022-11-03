const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('server running on port: ' + PORT))


const io = socket(server);

io.on('connection', socket => {

  // console.log(socket.id)

  socket.on('new-connection', userName => {
    // console.log(userName + ' has entered the chat')
    socket.broadcast.emit('new-user', userName);
  })

  socket.on('message', data => {
    io.sockets.emit('new-message', data)
  })

})