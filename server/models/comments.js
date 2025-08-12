const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  newsID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "News",
    required: true,
  },

  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  comment: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comments = mongoose.model("Comments", commentSchema);
module.exports = Comments;
