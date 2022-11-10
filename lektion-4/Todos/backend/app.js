const express = require('express');
const app = express();

const userController = require('./controllers/userController');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', userController);


module.exports = app;