exports.middleware = function (req, res, next) {
  // let token = null;
  if (req.headers.authorization) {
    console.log("LOGGED");
  } else {
    console.log("no token");
  }

  next();
};
