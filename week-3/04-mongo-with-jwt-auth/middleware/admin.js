// Middleware for handling auth
const jwt = require("jsonwebtoken")

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(" ")
    const jwtToken = token[1]

  try{
    const decode = jwt.verify(jwtToken, process.env.JWT_KEY);
    if(decode.username) {
        next();
    } else {
        res.status(403).json({
            msg: "You are not authorized"
        })
    }
  } catch(e) {
    res.json({ msg: "Incorrect Inputs" })
  }
}

module.exports = adminMiddleware;