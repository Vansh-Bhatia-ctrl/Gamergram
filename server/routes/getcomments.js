const express = require("express");
const { getAllComments } = require("../controllers/getAllComments");
const router = express.Router();

router.get("/get-all-comments", getAllComments);

module.exports = router;
