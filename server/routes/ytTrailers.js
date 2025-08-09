const express = require("express");
const router = express.Router();
const { getYoutubeTrailers } = require("../controllers/youtubeContent");

router.post("/getyttrailers", getYoutubeTrailers);

module.exports = router;
