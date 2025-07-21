const express = require("express");
const { getGameDetails } = require("../controllers/getGameDetail");
const router = express.Router();

router.get("/:gameID", getGameDetails);

module.exports = router;
