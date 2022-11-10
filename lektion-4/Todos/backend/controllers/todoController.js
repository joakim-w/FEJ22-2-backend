const router = require('express').Router();
const todoModel = require('../models/todos/todoModel');
const auth = require('../middleware/auth');

router.get('/my-todos', auth.verifyToken, todoModel.getMyTodos);

router.get('/', todoModel.getAllTodos);
router.get('/:id', todoModel.getTodoById);

router.post('/', auth.verifyToken, todoModel.createNewTodo);

router.put('/:id', auth.verifyToken, todoModel.updateTodo);

router.delete('/:id', auth.verifyToken, todoModel.deleteTodo);

module.exports = router;
