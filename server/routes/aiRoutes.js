const express = require("express");
const { createAiAccounts } = require("../controllers/createAiAccount");
const router = express.Router();

router.post("/create-ai", createAiAccounts);

module.exports = router;