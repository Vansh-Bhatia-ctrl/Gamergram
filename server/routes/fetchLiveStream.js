const express = require("express");
const router = express.Router();
const { fetchLiveStreams } = require("../controllers/twitchStreams");
const { validateAuth } = require("../middleware/verifyAuth");

router.get("/livestreams", validateAuth, fetchLiveStreams);

module.exports = router;
