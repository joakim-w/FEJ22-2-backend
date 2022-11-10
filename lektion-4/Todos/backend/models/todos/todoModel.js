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

  Todo.findOne({ _id: req.params.id })
  .populate('user')
  .exec((err, todo) => {
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


    const todoResponse = {
      _id: todo._id,
      title: todo.title,
      completed: todo.completed,
      user: {
        _id: todo.user._id,
        name: todo.user.name
      }

    }

    res.status(200).json(todoResponse)
  })


  // Todo.findOne({ _id: req.params.id }, (err, todo) => {

  //   todo.populate('user')

  //   if(err) {
  //     return res.status(500).json({
  //       message: 'Something went wrong when fetching the todo',
  //       err: process.env.NODE_ENV === 'production' ? '' : err
  //     })
  //   }

  //   if(!todo) {
  //     return res.status(404).json({
  //       message: 'Ooops, this todo does not exist'
  //     })
  //   }

  //   const todoResponse = {
  //     ...todo,
  //     userName: todo.user.name
  //   }

  //   res.status(200).json(todoResponse)

  // })

}

exports.getMyTodos = (req, res) => {

  Todo.find({ user: req.userId }, (err, data) => {

    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when fetching the todos',
        err: process.env.NODE_ENV === 'production' ? '' : err
      })
    }

    res.status(200).json(data);
  })

}


exports.createNewTodo = (req, res) => {

  const { title } = req.body;

  if(!title) {
    return res.status(400).json({
      message: 'You need to enter something ToDo'
    })
  }

  Todo.create({ title, user: req.userId }, (err, data) => {

    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when creating the todo',
        err: process.env.NODE_ENV === 'production' ? '' : err
      })
    }

    res.status(201).json(data);

  })
}


exports.updateTodo = (req, res) => {

  Todo.findOne({ _id: req.params.id }, (err, todo) => {

    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when updating the todo',
        err: process.env.NODE_ENV === 'production' ? '' : err
      })
    }

    if(!todo) {
      return res.status(404).json({
        message: 'Could not find the todo'
      })
    }


    if(todo.user.toString() !== req.userId) {
      return res.status(401).json({
        message: 'You are not authorized to edit other peoples todos'
      })
    }


    Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updatedTodo) => {

      if(err) {
        return res.status(500).json({
          message: 'Something went wrong when updating the todo',
          err: process.env.NODE_ENV === 'production' ? '' : err
        })
      }

      res.status(200).json(updatedTodo)
  
    })
  })
}


exports.deleteTodo = (req, res) => {
  Todo.findOne({ _id: req.params.id }, (err, todo) => {

    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when updating the todo',
        err: process.env.NODE_ENV === 'production' ? '' : err
      })
    }

    if(!todo) {
      return res.status(404).json({
        message: 'Could not find the todo'
      })
    }


    if(todo.user.toString() !== req.userId) {
      return res.status(401).json({
        message: 'You are not authorized to edit other peoples todos'
      })
    }

    todo.remove()
      .then(todo => {
        res.status(200).json({ id: todo._id })
      })

  })
}