const { User } = require('../db')

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const response = await User.findOne({
    username: req.headers.username,
    password: req.headers.password,
  })
  if (response) {
    next()
  } else {
    res.status(401).json({ message: 'User Not Found' })
  }
}

module.exports = userMiddleware
