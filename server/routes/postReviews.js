const express = require("express");
const { postReviews } = require("../controllers/reviewsController");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.post("/review", validateAuth, postReviews);

module.exports = router;
