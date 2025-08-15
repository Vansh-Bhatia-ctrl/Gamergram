const Comments = require("../models/comments");

const getAllComments = async (req, res) => {
  try {
    const comment = await Comments.find();
    if (Comments.length === 0) {
      return res.status(404).json([]);
    }

    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong, please try again!",
      error: error.message,
    });
  }
};

module.exports = { getAllComments };
