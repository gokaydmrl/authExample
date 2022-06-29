const User = require("../models/dbmodel");

exports.postUserHandler = async (req, res) => {
  const { fName, email, password } = req.body;
  const user = await User.create({
    fName,
    email,
    password,
  });
  res.status(201).json(user);
};
