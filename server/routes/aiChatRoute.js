const express = require("express");
const router = express.Router();
const Chat = require("../models/aichat");

router.get("/:aiUserName", async (req, res) => {
  const { aiUserName } = req.params;

  try {
    const chat = await Chat.find({ aiUserName }).sort({ timestamp: -1 });
    return res.status(200).json(chat);
  } catch (error) {
    console.error("Failed to fetch chat history:", error);
    res.status(500).json({ message: "Failed to fetch chat history" });
  }
});

module.exports = router;
