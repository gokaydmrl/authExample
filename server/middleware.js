const jwt = require("jsonwebtoken");
const User = require("./models/dbmodel");

exports.middleware = function (req, res, next) {
  let token = null;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    try {
      token = req.headers.authorization.split(" ")[1];
      token && next();

      // Verify token
    } catch (error) {
      console.log("this error from middleware", error);
      res.redirect("http://localhost:3000/register");
      throw new Error("Not authorized");
    }
};
