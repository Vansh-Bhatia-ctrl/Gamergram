const express = require("express");
const { generateCoverImages } = require("../controllers/RAWGcoverImages");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.get("/covers", generateCoverImages);

module.exports = router;
