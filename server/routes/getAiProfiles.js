const express = require("express");
const { getAiProfiles } = require("../controllers/getAiProfiles");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.get("/ai-profiles", getAiProfiles);

module.exports = router;
