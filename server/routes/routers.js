const express = require("express");
const router = express.Router();

const getUserCont = require("../controllers/getUserCont")
const postUserCont = require("../controllers/postUserCont");

router.get("/register", getUserCont.getUserHandler) 
router.post("/register", postUserCont.postUserHandler)

module.exports = router