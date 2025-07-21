const GameNews = require("../models/gameInfo");

const getGameDetails = async (req, res) => {
  try {
    const { gameID } = req.params;

    if (!gameID) {
      return res
        .status(404)
        .json({ message: "No game ID found, please try again." });
    }

    const getGame = await GameNews.findById({ _id: gameID });
    return res.status(200).json(getGame);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { getGameDetails };
