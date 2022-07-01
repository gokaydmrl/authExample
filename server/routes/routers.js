const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")

router.get("/register", userController.getUserHandler) 
router.post("/register", userController.postUserHandler)

module.exports = router