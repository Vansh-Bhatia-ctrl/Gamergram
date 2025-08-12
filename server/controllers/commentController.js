const Comments = require("../models/comment");

const saveCommentsToDB = async (req, res) => {
  try {
    const { comment, userID, newsID } = req.body;

    if (!comment || !userID || !newsID) {
      return res
        .status(400)
        .json({ message: "Required fields missing. Please try again." });
    }

    const newComment = new Comments({
      newsID: newsID,
      userID: userID,
      comment: comment,
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
