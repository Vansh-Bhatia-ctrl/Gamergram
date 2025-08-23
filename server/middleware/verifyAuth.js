const jwt = require("jsonwebtoken");
const { tokenBlackList } = require("../controllers/authController");
require("dotenv").config();

const validateAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unable to authenticate, please try again." });
    }

    if (tokenBlackList.includes(token)) {
      return res.status(401).json({
        message: "Session expired. Please log in again.",
      });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;

    if (payload.isAI) {
      req.user.isAI = true;
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: "unable to authenticate the user, please try again.",
      error: error.message,
    });
  }
};

module.exports = { validateAuth };
