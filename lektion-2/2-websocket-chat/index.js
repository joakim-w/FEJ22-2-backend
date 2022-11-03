const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const { userConnect, userDisconnect } = require('./users')

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
    userConnect(socket.id, userName);
    socket.broadcast.emit('user', `${userName} has entered the chat!`);
  })

  socket.on('message', data => {
    io.sockets.emit('new-message', data)
  })

  socket.on('typing', userName => {

    socket.broadcast.emit('typing', userName);
  })

  socket.on("disconnect", () => {
    const user = userDisconnect(socket.id)
    io.sockets.emit('user', `${user.userName} has left the chat.`)

  })

  // socket.on('manual-logout', () => {
  //   const user = userDisconnect(socket.id)
  //   io.sockets.emit('user', `${user.userName} has left the chat.`)
  // })

})