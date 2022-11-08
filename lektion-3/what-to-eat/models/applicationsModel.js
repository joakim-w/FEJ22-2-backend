const { default: mongoose } = require('mongoose');
const Application = require('../schemas/applicationSchema');


exports.createNewApiUser = (req, res) => {
  
  Application.exists({ name: req.body.name }, (err, result) => {

    if(err) {
      return res.status(400).json({
        message: 'Bad request'
      })
    }

    if(result) {
      return res.status(403).json({
        message: 'An application by that name already exists'
      })
    }

    const { name, host } = req.body;

    if(!name || !host ) {
      return res.status(400).json({
        message: 'You need to enter all the fields',
      })
    }

    const user = {
      name,
      api_key: mongoose.Types.ObjectId(),
      host
    }

    Application.create(user, (err, data) => {

      if(err) {
        return res.status(500).json({
          message: 'Something went wrong when generating API key'
        })
      }
      
      res.status(201).json({
        api_key: data.api_key
      })
    })
  })
}