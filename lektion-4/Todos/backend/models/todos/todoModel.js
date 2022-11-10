const Todo = require('./todoSchema');
require('dotenv').config();

exports.getAllTodos = (req, res) => {

  Todo.find({}, (err, data) => {

    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when fetching the todos',
        err: process.env.NODE_ENV === 'production' ? '' : err
      })
    }

    res.status(200).json(data);
  })

}

exports.getTodoById = (req, res) => {

  Todo.findOne({ _id: req.params.id }, (err, todo) => {

    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when fetching the todo',
        err: process.env.NODE_ENV === 'production' ? '' : err
      })
    }

    if(!todo) {
      return res.status(404).json({
        message: 'Ooops, this todo does not exist'
      })
    }

    res.status(200).json(todo)

  })

}



exports.createNewTodo = (req, res) => {

  const { title } = req.body;

  if(!title) {
    return res.status(400).json({
      message: 'You need to enter something ToDo'
    })
  }

  Todo.create({ title, user: req.userData.id }, (err, data) => {

    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when creating the todo',
        err: process.env.NODE_ENV === 'production' ? '' : err
      })
    }

    res.status(201).json(data);

  })
}