const express = require("express");
const router = express.Router();
const { fetchLiveStreams } = require("../controllers/twitchStreams");

router.get("/livestreams", fetchLiveStreams);

module.exports = router;
