const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signup = async (req, res) => {
  try {
    const { Name, email, password, userName, bio } = req.body;
    const randomAvatar = `https://api.dicebear.com/6.x/adventurer/svg?seed=${userName}`;

    const user = new User({
      Name,
      email,
      password,
      userName,
      avatar: randomAvatar,
      bio,
    });
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
    const checkIfAi = existingUser.isAI;
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
      isAI: existingUser.isAI,
      avatar: existingUser.avatar,
      bio: existingUser.bio,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: checkIfAi ? undefined : "1h" },
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

let tokenBlackList = [];

const logOut = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token missing." });
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token." });
    }

    tokenBlackList.push(token);

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error logging out, please try again.",
      error: error.message,
    });
  }
};

module.exports = { signup, login, logOut, tokenBlackList };
