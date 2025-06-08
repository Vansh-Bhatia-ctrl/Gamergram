const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signup = async (req, res) => {
  try {
    const { Name, email, password, userName } = req.body;

    const user = new User({ Name, email, password, userName });
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
    const { username, password } = req.body;
    const existingUser = await User.findOne({ userName: username });
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

    const payload = {
      id: existingUser._id,
      Name: existingUser.Name,
      userName: existingUser.userName,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          message: "Logged-in successfully",
          token,
          user: {
            id: existingUser._id,
            Name: existingUser.Name,
            userName: existingUser.userName,
          },
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      message: "Error logging in, please try again.",
      error: error.message,
    });
  }
};

module.exports = { signup, login };
