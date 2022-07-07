const User = require("../models/dbmodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// handling errors
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
// ikinci paraemtre secret onu env'e al
const generateToken = (id) => {
  return jwt.sign({ id }, "sonradanBak", {
    expiresIn: 99999,
  });
};

// Register User
// creating user and saving in db
// /register endpoint

exports.registerUser = async (req, res) => {
  try {
    const { fName, email, password } = req.body;

    // hash password

    const salt = bcrypt.genSaltSync(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      fName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id);

    // axios'a gidecek burdan gönderilen data (response.data)
    // passwoord göndermeye gerek yok sanırım
    await res.status(201).json({
      fName: fName,
      email: email,
      token: token,
      password: hashedPassword,
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

    console.log("cntr user", user);

    const token = generateToken(user._id);

    if (user && bcrypt.compare(password, user.password)) {
      res.json({ email: user.email, token: token });
    }
  } catch (error) {
    console.log(error);
  }
};

// get users logged in

// exports.getLoginHandler = async (req, res) => {
//   const { email} = req.body;
//   const response = await User.find({ email });
//   res.json(response);
//   console.log("login resp", response);
// };

// get registered Users

exports.getUserHandler = async (req, res) => {
  const response = await User.find({});
  res.status(200).json(response);
  // console.log("get handler response", response);
};
