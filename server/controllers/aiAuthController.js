const User = require("../models/users");
const jwt = require("jsonwebtoken");

const aiLogin = async (req, res) => {
  try {
    const aiUsers = await User.find({ isAI: true });

    if (!aiUsers) {
      return res.status(404).json({ message: "No AI characters found." });
    }
    const tokens = {};
    aiUsers.forEach((user) => {
      const payload = {
        id: user._id,
        Name: user.Name,
        userName: user.userName,
        isAI: true,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET);
      tokens[user.userName] = token;
    });

    return res.status(200).json(tokens);
  } catch (error) {
    console.error("Error logging in AI characters:", error.message);
    return res
      .status(500)
      .json({ message: "Something went wrong. Please try again!" });
  }
};

module.exports = { aiLogin };
