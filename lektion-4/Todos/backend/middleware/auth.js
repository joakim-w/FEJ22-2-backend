const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
  const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '2h' });
  return token
}