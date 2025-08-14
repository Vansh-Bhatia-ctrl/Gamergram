const Comments = require("../models/comments");

const saveCommentsToDB = async (req, res) => {
  try {
    const { comment, newsID } = req.body;

    if (!comment || !newsID) {
      return res
        .status(400)
        .json({ message: "Required fields missing. Please try again." });
    }

    const newComment = new Comments({
      newsID: newsID,
      userID: req.user.id,
      comment: comment,
      userName: req.user.userName,
    });

    await newComment.save();
    return res
      .status(200)
      .json({ message: "Comment saved successfully", comment: newComment });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong, please try later!",
      error: error.message,
    });
  }
};

module.exports = { saveCommentsToDB };
