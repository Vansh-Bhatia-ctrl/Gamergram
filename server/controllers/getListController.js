const UserLists = require("../models/userslist");

const getList = async (req, res) => {
  try {
    const userId = req.user.id;
    const username = req.user.userName;
    const avatar = req.user.avatar;
    const bio = req.user.bio;

    if (!userId) {
      return res.status(401).json({ message: "User must be authenticated." });
    }

    const userList = await UserLists.find({
      userId: userId,
    });
    if (!userList) {
      return res.status(400).json({ message: "No games added to list." });
    }

    return res
      .status(200)
      .json({
        userList: userList,
        userName: username,
        avatar: avatar,
        bio: bio,
      });
  } catch (error) {
    console.log("Error fetching userList: ", error.message);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { getList };
