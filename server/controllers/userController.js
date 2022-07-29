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

  console.log("err errors", err.errors);
  // console.log("mesage", err);

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

    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      fName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id);

    // axios'a gidecek burdan gönderilen data (response.data)
    // passwoord göndermeye gerek yok sanırım
    await res
      .header({ Authorization: `Bearer ${token}` })
      .status(201)
      .json({
        fName: fName,
        email: email,
        token: token,
        password: hashedPassword,
      });
    console.log("req headers: ", req.headers);
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
    console.log("pswrd", password);
    console.log("userpswrd", user.password);
    console.log("id", user._id);
    const token = generateToken(user._id);
    console.log("this", bcrypt.compare(password, user.password));

    if (user && (await bcrypt.compare(password, user.password))) {
      res
        .header({ Authorization: `Bearer ${token}` })
        .json({ email: user.email, token: token });
    }
  } catch (error) {
    console.log("login error:",error);
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
  console.log("get handler response", response);
};

// User.deleteMany({

// }).then(function(){
//     console.log("Data deleted"); // Success
// }).catch(function(error){
//     console.log(error); // Failure
// });
