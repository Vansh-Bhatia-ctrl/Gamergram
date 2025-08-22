const express = require("express");
const { getQuiz } = require("../controllers/quizController");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.get("/quizes", validateAuth, getQuiz);

module.exports = router;
