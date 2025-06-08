const User = require("../models/users");

const validateUserSignUp = async (req, res, next) => {
  const { Name, email, password, userName } = req.body;

  if (!Name || !email || !password || !userName) {
    return res.status(400).json({ message: "Required fields are empty" });
  }

  const existingUser = await User.findOne({ email: email });
  const existingUserName = await User.findOne({ username: userName });
  if (existingUser || existingUserName) {
    return res.status(409).json({
      message:
        "Email or username already in use, please try with a different email or username.",
    });
  }

  next();
};

module.exports = { validateUserSignUp };
