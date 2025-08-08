const express = require("express");
const router = express.Router();
const { getAllGames } = require("../controllers/getGameData");
const { validateAuth } = require("../middleware/verifyAuth");

router.get("/getallgames", validateAuth, getAllGames);

module.exports = router;
