const express = require("express");
const { saveAllNews } = require("../controllers/news");
const router = express.Router();

router.post("/save", saveAllNews);

module.exports = router;