const express = require('express');
const app = express();

const userController = require('./controllers/userController');


app.use('/api/users', userController);


module.exports = app;