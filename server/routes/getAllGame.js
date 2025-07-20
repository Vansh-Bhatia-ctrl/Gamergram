const express = require("express");
const router = express.Router();
const { getAllGames } = require("../controllers/getGameData");

router.get("/getallgames", getAllGames);

module.exports = router;
