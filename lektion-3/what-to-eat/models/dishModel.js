const Dish = require('../schemas/dishSchema');


/**
 * GET: /api/dishes
 * returns a list of all the dishes
 */
exports.getAllDishes = (req, res) => {

  Dish.find({}, (err, data) => {
    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when getting the dishes'
      })
    }

    res.status(200).json(data)
  })
}

/**
 * GET: /api/dishes/:id
 * returns a single dish
 */
exports.getOneDishById = (req, res) => {
  Dish.findOne({ _id: req.params.id }, (err, data) => {

    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when getting the dish'
      })
    }

    if(!data) {
      return res.status(404).json({
        message: 'Could not find that dish'
      })
    }

    res.status(200).json(data)
  })
}


/**
 * POST: /api/dishes
 * creates a new dish
 */
exports.createNewDish = (req, res) => {

  const { name } = req.body

  if(!name) {
    return res.status(400).json({
      message: 'You need to enter a name'
    })
  }

  Dish.create({
    name
  }, (err, data) => {

    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when creating the dish',
        err: err.message
      })
    }

    res.status(201).json(data)
  })
}


/**
 * PUT: /api/dishes/:id
 */
exports.updateDish = (req, res) => {

  Dish.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, data) => {

    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when updating the dish',
        err: err.message
      })
    }

    if(!data) {
      return res.status(404).json({
        message: 'Could not find that dish'
      })
    }

    res.status(200).json(data)
  })
}


/**
 * DELETE: /api/dishes/:id
 * Deletes a single dish
 */
exports.deleteDish = (req, res) => {

  Dish.findOneAndDelete({ _id: req.params.id }, (err, data) => {

    if(err) {
      return res.status(500).json({
        message: 'Something went wrong when deleting the dish'
      })
    }

    if(!data) {
      return res.status(404).json({
        message: 'Could not find that dish'
      })
    }

    res.status(200).json({ id: data._id })
  })
}