const router = require('express').Router();
const dishModel = require('../models/dishModel');
const auth = require('../middleware/auth');

/**
 * @swagger
 * components:
 *  schemas:
 *    dish:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        _id:
 *          type: objectId
 *          description: Auto generated Id from mongoDb
 *        name:
 *          type: string
 *          description: the dish name
 *      example:
 *        _id: 636a51c53fe55c427f4fbb0a
 *        name: spaghetti
 */

/**
 * @swagger
 * tags:
 *  name: Dishes
 *  description: dishes API
 */

// Create
router.post('/', auth.validateApiKey, dishModel.createNewDish);

// Read
/**
 * @swagger
 * /api/dishes?api_key={api_key}:
 *  get:
 *    summary: Returns a list of all the dishes
 *    tags: [Dishes]
 *    responses:
 *      200:
 *        description: the list
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/dish'
 */
router.get('/', auth.validateApiKey, dishModel.getAllDishes);
router.get('/random', auth.validateApiKey, dishModel.getRandomDishes);
router.get('/:id', auth.validateApiKey, dishModel.getOneDishById);

// Update
router.put('/:id', auth.validateApiKey, dishModel.updateDish);

// Delete
router.delete('/:id', auth.validateApiKey, dishModel.deleteDish);

module.exports = router;