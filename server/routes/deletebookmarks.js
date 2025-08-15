const express = require("express");
const { deleteBookMarks } = require("../controllers/bookmarks");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.delete("/remove-bookmark/:newsID", validateAuth, deleteBookMarks);

module.exports = router;
