const GameCharacters = require("../models/characterInfo");

const getGameCharacters = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    const characters = await GameCharacters.find();

    if (!characters) {
      return res.status(404).json({ message: "No characters found," });
    }

    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).json({
      Message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { getGameCharacters };
