const express = require('express');
const app = express();

const dishController = require('./controllers/dishController');

app.use('/api/dishes', dishController)

module.exports = app;