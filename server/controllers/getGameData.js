const GameNews = require("../models/gameInfo");

const getAllGames = async (req, res) => {
  try {
    const games = await GameNews.find();
    res.status(200).json(games);
  } catch (error) {
    console.error("Failed to fetch games from DB:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllGames };
