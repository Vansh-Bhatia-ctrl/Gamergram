const express = require("express");
const { getAiProfiles } = require("../controllers/getAiProfiles");
const router = express.Router();

router.get("/ai-profiles", getAiProfiles);

module.exports = router;
