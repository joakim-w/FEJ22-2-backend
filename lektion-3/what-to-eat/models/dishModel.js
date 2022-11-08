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