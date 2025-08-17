const AiProfiles = require("../models/aiprofiles");

const getAiProfiles = async (req, res) => {
  try {
    const aiProfile = await AiProfiles.find();
    if (!AiProfiles) {
      return res.status(400).json({ message: "No profiles found." });
    }

    return res.status(200).json(aiProfile);
  } catch (error) {
    console.log("Error", error.message);
    return res.status(500).json({
      message: "Something went, wrong please try again.",
      error: error.message,
    });
  }
};

module.exports = { getAiProfiles };
