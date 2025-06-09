const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const { validateUserSignUp } = require("../middleware/validateSignUp");
const { validateAuth } = require("../middleware/followmiddleware");
const { follow, unfollow } = require("../controllers/followunfollowController");
const upload = require("../middleware/mutlerConfig");
const { postToCloudinary } = require("../controllers/postmedia");
const { validiateComment } = require("../middleware/commentmiddleware");
const { postCommentToDB } = require("../controllers/commentController");
const { validateLikes } = require("../middleware/likesmiddleware");
const { saveLikesToDB } = require("../controllers/likesController");

router.post("/signup", validateUserSignUp, signup);
router.post("/login", login);
router.post("/follow", validateAuth, follow);
router.post("/unfollow", validateAuth, unfollow);
router.post(
  "/createpost",
  validateAuth,
  upload.single("file"),
  postToCloudinary
);
router.post("/comments", validateAuth, validiateComment, postCommentToDB);
router.post("/likes", validateAuth, validateLikes, saveLikesToDB);

module.exports = router;
