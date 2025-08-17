const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  character: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AiProfiles",
    required: true,
  },
  messages: [
    {
      sender: {
        type: String,
        enum: ["user", "ai"],
      },
      text: String,
      timeStamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
