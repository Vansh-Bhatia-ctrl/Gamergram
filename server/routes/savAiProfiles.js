const express = require("express");
const { saveAiDataToDB } = require("../controllers/saveAiDataToDB");
const router = express.Router();

router.post("/save-ai-profiles", saveAiDataToDB);

module.exports = router;
