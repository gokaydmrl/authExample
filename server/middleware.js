const jwt = require("jsonwebtoken");
const User = require("./models/dbmodel");

exports.middleware = async function (req, res, next) {
  let token = null;
  if (
    req.headers.Authorization &&
    req.headers.Authorization.startsWith("Bearer")
  )
    try {
      token = req.headers.Authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, "sonradanBak");
      req.user = await User.findById(decoded.id).select("-password");
      console.log("decoded", decoded);
      next();
    } catch (error) {
      console.log("this error from middleware", error);
      throw new Error("Not authorized");
    }
  if (!token) {
    res.status(401);
    throw new Error("no token. not authorized");
  }
};
