const User = require("../models/users");

exports.addToBookmark = async (req, res) => {
  try {
    const { newsID } = req.params;
    const userID = req.user.id;

    const updatedUsers = await User.findByIdAndUpdate(
      userID,
      {
        $addToSet: { bookmarks: newsID },
      },
      { new: true }
    ).populate("bookmarks");

    return res
      .status(200)
      .json({ status: "success", bookmarks: updatedUsers.bookmarks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBookMarks = async (req, res) => {
  try {
    const { newsID } = req.params;
    const userID = req.user.id;

    const updatedRemovedBookmarks = await User.findByIdAndUpdate(
      userID,
      {
        $pull: { bookmarks: newsID },
      },
      { new: true }
    ).populate("bookmarks");

    return res.status(200).json({
      status: "success",
      bookmarks: updatedRemovedBookmarks.bookmarks,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookmarks = async (req, res) => {
  try {
    const userID = req.user.id;

    const user = await User.findById(userID).populate("bookmarks");

    return res.status(200).json({
      status: "success",
      bookmarks: user.bookmarks,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
