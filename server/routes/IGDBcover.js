const express = require("express");
const { generateCoverImages } = require("../controllers/IGDBcoverimages");
const router = express.Router();

router.get("/covers", generateCoverImages);

module.exports = router;
