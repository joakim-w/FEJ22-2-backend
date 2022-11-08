const router = require('express').Router();
const dishModel = require('../models/dishModel');
const auth = require('../middleware/auth');

// Create
router.post('/', auth.validateApiKey, dishModel.createNewDish);

// Read
router.get('/', auth.validateApiKey, dishModel.getAllDishes);
router.get('/random', auth.validateApiKey, dishModel.getRandomDishes);
router.get('/:id', auth.validateApiKey, dishModel.getOneDishById);

// Update
router.put('/:id', auth.validateApiKey, dishModel.updateDish);

// Delete
router.delete('/:id', auth.validateApiKey, dishModel.deleteDish);

module.exports = router;