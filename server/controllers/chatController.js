const Chat = require("../models/aichat");
const getAiReply = require("../utils/getAiReply");

const handleChatSave = async (socket, data) => {
  const { aiUserName, userMessage } = data;

  if (!aiUserName || !userMessage) {
    return socket.emit("error", {
      message: "Required fields are empty. Please try again!",
    });
  }

  try {
    const aiReply = await getAiReply(aiUserName, userMessage);

    const chat = new Chat({ aiUserName, userMessage, aiReply });
    await chat.save();

    socket.emit("aiReply", { aiReply, userMessage });
  } catch (error) {
    console.error("Error handling chat:", error);
    socket.emit("error", { message: "Error handling chat" });
  }
};

module.exports = { handleChatSave };
