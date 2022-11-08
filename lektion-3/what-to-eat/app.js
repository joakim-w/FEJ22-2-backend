const express = require('express');
const app = express();

const dishController = require('./controllers/dishController');




app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/api/dishes', dishController);

module.exports = app;