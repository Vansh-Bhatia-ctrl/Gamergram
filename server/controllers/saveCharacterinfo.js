const GameCharacters = require("../models/characterInfo");
const gameCharacterData = require("../data/gameCharacters.json");

const saveCharactersToDb = async (req, res) => {
  try {
    const existingProfiles = await GameCharacters.countDocuments();
    if (existingProfiles > 0) {
      return res
        .status(400)
        .json({ message: "Character information is already stored." });
    }

    const saveInfo = await GameCharacters.insertMany(gameCharacterData);
    return res.status(200).json({
      message: "Saved characters data in db.",
      characterData: saveInfo,
    });
  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(500).json({
      message: "Something went wrong, please try again!",
      error: error.message,
    });
  }
};

module.exports = { saveCharactersToDb };
