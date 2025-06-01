const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const { validateUserSignUp } = require("../middleware/validateSignUp");
const { validateFollow } = require("../middleware/followmiddleware");
const { follow, unfollow } = require("../controllers/followunfollowController");

router.post("/signup", validateUserSignUp, signup);
router.post("/login", login);
router.post("/follow", validateFollow, follow);
router.post("/unfollow", validateFollow, unfollow);

module.exports = router;
