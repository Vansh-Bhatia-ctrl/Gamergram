const express = require("express");
const { getGameCharacters } = require("../controllers/getGameCharacters");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.get("/get-characters", validateAuth, getGameCharacters);

module.exports = router;
