const express = require("express");
const { addToBookmark } = require("../controllers/bookmarks");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.post("/bookmarks/:newsID", validateAuth, addToBookmark);

module.exports = router;
