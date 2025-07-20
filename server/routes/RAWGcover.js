const express = require("express");
const { fetchGameInfo } = require("../controllers/RAWGcoverImages");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.get("/covers", fetchGameInfo);

module.exports = router;
