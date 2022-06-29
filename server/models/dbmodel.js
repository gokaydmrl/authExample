const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    fName: {
      type: String,
      required: [true, "please add your name"],
    },
    email: {
      type: String,
      required: [true, "please add an email"],
      lowercase: true,
      unique: [true, "this email already exists"],
    },
    password: {
      type: String,
      required: true,
      min: [6, "the password should include at least 6 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
