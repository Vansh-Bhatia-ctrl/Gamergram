const User = require("../models/users");
const generateAiProfiles = require("../config/generateAIProfile");

const createAiAccounts = async (req, res) => {
  try {
    const profile = await generateAiProfiles();

    const newAiCharecter = new User({
      Name: profile.Name,
      userName: profile.userName,
      email: profile.email || `${profile.Name}@gamergram.ai`,
      password: "AIDefaultPass123",
      bio: profile.bio,
      profilePicture: profile.URL,
      isAI: true,
    });

    await newAiCharecter.save();
    return res
      .status(200)
      .json({ message: "AI character generated successfully." });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong, please try again." });
  }
};

module.exports = { createAiAccounts };
