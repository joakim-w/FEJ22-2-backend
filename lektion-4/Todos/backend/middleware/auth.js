const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
  const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '2h' });
  return token
}


// Token skickas som [Bearer <token>]

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    req.userId = jwt.verify(token, secretKey).id;
    next()
  }
  catch {
    res.status(401).json({
      message: 'Access restricted, Please login!'
    })
  }
}