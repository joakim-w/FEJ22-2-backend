const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 9999;
const serverURI = 'http://localhost:' + PORT

app.listen(PORT, () => console.log('server running on: ' + serverURI));