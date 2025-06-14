const Post = require("../models/posts");
const User = require("../models/users");
const Comment = require("../models/comments");

const getFeedPost = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res
        .status(400)
        .json({ message: "Unable to show feed. Please try again!" });
    }

    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found." });

    const following = user.following;

    const posts = await Post.find({ userId: { $in: following } })
      .sort({ createdAt: -1 })
      .populate("userId", "userName Name")
      .populate("likes", "userName");

    const postIds = posts.map((post) => post.id);

    const comments = await Comment.find({ postID: { $in: postIds } })
      .sort({ createdAt: -1 })
      .populate("userID", "userName")
      .populate("likes", "userName");

    const feed = posts.map((post) => {
      const likes = post.likes;
      const postComments = comments
        .filter((comment) => comment.postID.toString() === post._id.toString())
        .map((comment) => ({
          ...comment.toObject(),
          likes: comment.likes,
          replies: comment.replies.map((reply) => ({
            ...reply.toObject(),
            userName: reply.userID?.userName || reply.userID.toString(),
          })),
        }));

      return {
        ...post.toObject(),
        comments: postComments,
        likes: likes,
      };
    });

    return res.status(200).json(feed);
  } catch (error) {
    console.error("Feed error:", error);
    res.status(500).json({ message: "Failed to load feed." });
  }
};

module.exports = { getFeedPost };
