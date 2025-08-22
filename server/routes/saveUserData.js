const express = require("express");
const { saveQuizData } = require("../controllers/savequizData");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.post("/saveuserdata", validateAuth, saveQuizData);

module.exports = router;
