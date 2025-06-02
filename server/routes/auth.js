const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const { validateUserSignUp } = require("../middleware/validateSignUp");
const { validateFollow } = require("../middleware/followmiddleware");
const { follow, unfollow } = require("../controllers/followunfollowController");
const upload = require("../middleware/mutlerConfig");
const { postToCloudinary } = require("../controllers/postmedia");

router.post("/signup", validateUserSignUp, signup);
router.post("/login", login);
router.post("/follow", validateFollow, follow);
router.post("/unfollow", validateFollow, unfollow);
router.post("/createpost", upload.single("file"), postToCloudinary);

module.exports = router;
