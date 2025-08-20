const express = require("express");
const { saveCharactersToDb } = require("../controllers/saveCharacterinfo");
const router = express.Router();

router.post("/characters", saveCharactersToDb);

module.exports = router;
