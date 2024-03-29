const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { middleware } = require("../middleware");

router.get("/register", userController.getUserHandler);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/deneme", middleware, userController.getUserHandler);
// router.get("/login", userController.getLoginHandler);

module.exports = router;
