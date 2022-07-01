const User = require("../models/dbmodel");

// post user controller
const handleErrors = (err) => {
  let errors = {};

  if (err.code === 11000) {
    errors.email = "this email already registered";
    return errors;
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

exports.postUserHandler = async (req, res) => {
  try {
    const { fName, email, password } = req.body;
    const user = await User.create({
      fName,
      email,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    const errorsObject = handleErrors(error);
    res.status(400).json({ errorsObject });
    console.log("ers", errorsObject);
  }
};

// get Users controller

exports.getUserHandler = async (req, res) => {
  const response = await User.find({});
  res.status(200).json(response);
  // console.log("get handler response", response);
};
