const User = require("../models/dbmodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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

// creating token

const generateToken = (id) => {
  return jwt.sign({ id }, "sonradanBak", {
    expiresIn: 99999,
  });
};

// hash password

// Register User
// /register endpoint

exports.registerUser = async (req, res) => {
  try {
    const { fName, email, password } = req.body;

    const salt = bcrypt.genSalt(8);
    const hashedPassword = bcrypt(password, salt);

    const user = await User.create({
      fName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id);
    await res.status(201).json({
      fName: fName,
      email: email,
      token: token,
    });
  } catch (error) {
    const errorsObject = handleErrors(error);
    res.status(400).json({ errorsObject });
    console.log("ers", errorsObject);
  }
};

// loginUser
// /login endpoint

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      await res.json({ email: user.email, token: user.token });
    }
  } catch (error) {
    console.log(error);
  }
};

// get login handler

exports.getLoginHandler = async (req, res) => {
  const { email } = req.body;
  const response = await User.find({ email });
  res.status(200).json(response);
};

// get Users register controller

exports.getUserHandler = async (req, res) => {
  const response = await User.find({});
  res.status(200).json(response);
  // console.log("get handler response", response);
};
