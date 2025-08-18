const UserLists = require("../models/userslist");

const handleUserlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const { gameID, addType } = req.body;

    if (!gameID || !addType || !userId) {
      return res
        .status(400)
        .json({ message: "required fields not found, please try again." });
    }

    const existingGame = await UserLists.findOne({ gameID, userId });
    if (existingGame) {
      if (existingGame.status === addType) {
        await UserLists.deleteOne({ _id: existingGame._id });
        return res.status(200).json({ message: "Game removed from list." });
      } else {
        existingGame.status = addType;
        existingGame.timeStamp = new Date();
        await existingGame.save();
        return res.status(200).json(existingGame);
      }
    }

    const newUserlist = new UserLists({
      userId: userId,
      gameID: gameID,
      status: addType,
      timeStamp: new Date(),
    });

    await newUserlist.save();
    return res.status(200).json(newUserlist);
  } catch (error) {
    console.log("Error adding the game to the list. Error: ", error.message);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { handleUserlist };
