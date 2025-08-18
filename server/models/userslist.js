const mongoose = require("mongoose");

const userListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  gameID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GameNews",
    required: true,
  },
  status: {
    type: String,
    enum: ["played", "bookmarked", "playing", "completed", "wishlist"],
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

const UserLists = new mongoose.model("UserLists", userListSchema);

module.exports = UserLists;
