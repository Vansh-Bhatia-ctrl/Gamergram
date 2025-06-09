const Post = require("../models/posts");

const saveLikesToDB = async (req, res) => {
  try {
    const { postId } = req.body;
    const userID = req.user?.id;

    const post = await Post.findById(postId);

    if (!userID) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (!post.likes.includes(userID)) {
      post.likes.push(userID);
      await post.save();
      return res.status(200).json({ message: "Post liked successfully." });
    } else {
      post.likes = post.likes.filter((id) => id.toString() !== userID);
      await post.save();
      return res.status(200).json({ message: "Post unliked successfully." });
    }
  } catch (error) {
    console.error("Error in postCommentToDB middleware:", error);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { saveLikesToDB };
