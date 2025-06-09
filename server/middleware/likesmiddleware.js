const Post = require("../models/posts");

const validateLikes = async (req, res, next) => {
  try {
    const { postId } = req.body;
    const userID = req.user?.id;

    if (!userID) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
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

module.exports = { validateLikes };
