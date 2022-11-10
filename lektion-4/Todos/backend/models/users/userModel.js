const User = require('./userSchema');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const auth = require('../../middleware/auth');

// registerUser
exports.registerUser = (req, res) => {

  const { name, email, password } = req.body;

  if(!name || !email || !password) {
    return res.status(400).json({
      message: 'Please enter all the fields'
    })
  }

  User.exists({ email }, (err, result) => {

    if(err) {
      return res.status(400).json({
        message: 'You made a bad request',
        err: process.env.NODE_ENV === 'production' ? '' : err
      })
    }

    if(result) {
      return res.status(400).json({
        message: 'The email address is already taken'
      })
    }

    const salt = bcrypt.genSaltSync();

    bcrypt.hash(password, salt, (err, hash) => {

      if(err) {
        return res.status(500).json({
          message: 'Failed when encrypting the password',
          err: process.env.NODE_ENV === 'production' ? '' : err
        })
      }


      User.create({ name, email, passwordHash: hash }, (err, user) => {

        if(err) {
          return res.status(500).json({
            message: 'Failed to create user',
            err: process.env.NODE_ENV === 'production' ? '' : err
          })
        }

        res.status(201).json({
          message: 'User was created successfully',
          token: auth.generateToken(user)
        })

      })

    })
  })
}

//loginUser