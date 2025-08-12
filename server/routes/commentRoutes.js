const express = require("express");
const router = express.Router();
const { saveCommentsToDB } = require("../controllers/commentController");
const { validateAuth } = require("../middleware/verifyAuth");

router.post("/comment", validateAuth, saveCommentsToDB);

module.exports = router;
