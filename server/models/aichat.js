const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  aiUserName: { type: String, required: true },
  userMessage: { type: String, required: true },
  aiReply: { type: String, required: true },
  timeStamp: { type: Date, default: Date.now },
});

const AiChat = mongoose.model("AiChat", chatSchema);

module.exports = AiChat;
