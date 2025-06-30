const User = require("../models/users");
const { generateAiProfiles } = require("../config/generateAIProfile");
const bcrypt = require("bcrypt");

const createAiAccounts = async (req, res) => {
  try {
    const profile = await generateAiProfiles();

    const hashedPassword = await bcrypt.hash("AIDefaultPass123", 12);
    const aiProfiles = profile.map((charecter) => ({
      Name: charecter.Name,
      userName: charecter.userName,
      email: charecter.email,
      password: hashedPassword,
      profilePicture: charecter.profilePicture,
      bio: charecter.bio,
      isAI: true,
    }));

    await User.insertMany(aiProfiles);
    return res
      .status(200)
      .json({ message: "AI character information saved successfully." });
  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { createAiAccounts };
