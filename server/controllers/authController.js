const User = require("../models/users");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, userName } = req.body;

    const user = new User({ firstName, lastName, email, password, userName });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error registering user, please try again!",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(401)
        .json({ message: "No user found! Please try again." });
    }

    const isComparedPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isComparedPassword) {
      return res
        .status(401)
        .json({ message: "Incorrect password. Please try again." });
    }

    res.status(200).json({
      message: "Logged-in successfully",
      user: {
        id: existingUser._id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        userName: existingUser.userName,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error logging in, please try again.",
      error: error.message,
    });
  }
};

module.exports = { signup, login };
