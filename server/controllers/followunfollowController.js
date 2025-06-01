const User = require("../models/users");

const follow = async (req, res) => {
  const { followerId } = req.body;
  const userId = req.user.id;

  try {
    const userToFollow = await User.findById(followerId);
    const user = await User.findById(userId);
    if (!userToFollow) {
      return res.status(404).json({ message: "Unable to find the user." });
    }

    if (user.following.includes(followerId)) {
      return res
        .status(400)
        .json({ message: "You are already following this user." });
    }

    user.following.push(followerId);
    userToFollow.followers.push(userId);

    await user.save();
    await userToFollow.save();

    res
      .status(200)
      .json({ message: `You are now following ${userToFollow.userName}.` });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

const unfollow = async (req, res) => {
  const { unfollowerId } = req.body;
  const userId = req.user.id;

  try {
    const userToUnfollow = await User.findById(unfollowerId);
    const user = await User.findById(userId);

    if (!userToUnfollow) {
      return res.status(400).json({ message: "You do not follow this user." });
    }

    user.following = user.following.filter(
      (id) => id.toString() !== unfollowerId
    );
    userToUnfollow.followers = userToUnfollow.followers.filter(
      (id) => id.toString() !== userId
    );

    await user.save();
    await userToUnfollow.save();

    res.status(200).json({ message: "User unfollowed successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again!" });
  }
};

module.exports = { follow, unfollow };
