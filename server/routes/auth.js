const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const { validateUserSignUp } = require("../middleware/validateSignUp");

router.post("/signup", validateUserSignUp, signup);
router.post("/login", login);

module.exports = router;
