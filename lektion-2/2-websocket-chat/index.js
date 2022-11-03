const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);


app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('server running on port: ' + PORT))