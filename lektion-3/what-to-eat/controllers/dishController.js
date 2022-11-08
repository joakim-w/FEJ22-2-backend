const router = require('express').Router();
const dishModel = require('../models/dishModel');

// Create
router.post('/', dishModel.createNewDish);

// Read
router.get('/', dishModel.getAllDishes);
router.get('/:id', dishModel.getOneDishById);

// Update
router.put('/:id', dishModel.updateDish);

// Delete
router.delete('/:id', dishModel.deleteDish);

module.exports = router;