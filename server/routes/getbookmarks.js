const express = require("express");
const { getBookmarks } = require("../controllers/bookmarks");
const router = express.Router();

router.get("/get-bookmarks", getBookmarks);

module.exports = router;
