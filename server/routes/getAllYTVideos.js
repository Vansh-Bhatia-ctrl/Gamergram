const express = require("express");
const { getAllVideos } = require("../controllers/getAllVideos");
const router = express.Router();

router.get("/videos", getAllVideos);

module.exports = router;
