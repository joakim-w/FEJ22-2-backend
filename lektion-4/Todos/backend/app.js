const express = require('express');
const app = express();

const userController = require('./controllers/userController');
const todoController = require('./controllers/todoController');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', userController);
app.use('/api/todos', todoController);


module.exports = app;