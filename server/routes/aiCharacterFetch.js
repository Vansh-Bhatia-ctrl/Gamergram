const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { validateAuth } = require("../middleware/verifyAuth");

router.get("/all", validateAuth, async (req, res) => {
  try {
    const fetchedCharacters = await User.find({ isAI: true });
    return res.status(200).json(fetchedCharacters);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch characters" });
  }
});

module.exports = router;
