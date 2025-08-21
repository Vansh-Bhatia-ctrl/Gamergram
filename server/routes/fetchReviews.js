const express = require("express");
const { fetchReviews } = require("../controllers/fetchReviews");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.get("/getreviews", validateAuth, fetchReviews);

module.exports = router;
