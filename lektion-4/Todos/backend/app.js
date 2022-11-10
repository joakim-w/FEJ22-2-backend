const express = require('express');
const app = express();
const cors = require('cors');
// const path = require('path');
// require('dotenv').config();

const userController = require('./controllers/userController');
const todoController = require('./controllers/todoController');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend')))
// }


app.use('/api/users', userController);
app.use('/api/todos', todoController);


module.exports = app;