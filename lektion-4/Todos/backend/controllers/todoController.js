const router = require('express').Router();
const todoModel = require('../models/todos/todoModel');
const auth = require('../middleware/auth');

router.get('/', todoModel.getAllTodos);
router.get('/:id', todoModel.getTodoById);


router.post('/', auth.verifyToken, todoModel.createNewTodo);

module.exports = router;
