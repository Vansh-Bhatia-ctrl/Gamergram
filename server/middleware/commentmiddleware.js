const Post = require("../models/posts");

const validiateComment = async (req, res, next) => {
  try {
    const { postID } = req.body;
    const userID = req.user?.id;

    const post = await Post.findById(postID);

    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    if (!userID) {
      return res.status(400).json({ message: "User not authenticated." });
    }

    next();
  } catch (error) {
    console.error("Error in postCommentToDB middleware:", error);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { validiateComment };
