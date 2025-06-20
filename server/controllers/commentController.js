const Comment = require("../models/comments");

const postCommentToDB = async (req, res) => {
  try {
    const { postID, text, userName } = req.body;
    const userID = req.user.id;
    const newComment = new Comment({ userID, postID, text, userName });
    await newComment.save();

    return res
      .status(200)
      .json({ message: "Comment successfully added.", comment: newComment });
  } catch (error) {
    console.error("Error in postCommentToDB middleware:", error);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { postCommentToDB };
