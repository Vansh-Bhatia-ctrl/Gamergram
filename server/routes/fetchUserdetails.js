const express = require("express");
const { fetchUserQuizDetails } = require("../controllers/fetchquizdetails");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.get("/userdata", validateAuth, fetchUserQuizDetails);

module.exports = router;
