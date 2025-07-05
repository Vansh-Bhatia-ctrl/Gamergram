const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.get("/:userName", async (req, res) => {
    
  const { userName } = req.params;

  try {
    const aiCharacter = await User.findOne({ userName, isAI: true });
    return res.status(200).json(aiCharacter);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong, please try again!" });
  }
});

module.exports = router;
