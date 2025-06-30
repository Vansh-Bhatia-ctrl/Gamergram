const User = require("../models/users");
const jwt = require("jsonwebtoken");

const autoAiLogin = async () => {
  try {
    const aiUsers = await User.find({ isAI: true });

    if (!aiUsers || aiUsers.length === 0) {
      return console.log("No AI characters found.");
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

    return console.log(tokens);
  } catch (error) {
    console.error("Error logging in AI characters:", error.message);
  }
};

module.exports = { autoAiLogin };
