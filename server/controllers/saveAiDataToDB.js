const AiProfiles = require("../models/aiprofiles");
const characterData = require("../data/characterInfor.json");

const saveAiDataToDB = async (req, res) => {
  try {
    const existingProfiles = await AiProfiles.countDocuments();
    if (existingProfiles > 0) {
      return res.status(400).json({
        message: "Character profiles already exist in database",
        count: existingProfiles,
      });
    }

    const savedProfiles = await AiProfiles.insertMany(characterData);

    return res.status(201).json({
      message: "Added character profiles to DB.",
      count: savedProfiles.length,
      profiles: savedProfiles,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong, please try again!" });
  }
};

module.exports = { saveAiDataToDB };
