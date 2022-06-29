const User = require("../models/dbmodel")

exports.getUserHandler = async (req, res) => {
    const response = await User.find({});
    res.status(200).json(response);
   // console.log("get handler response", response);
}

