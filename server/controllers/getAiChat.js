const Chat = require("../models/aichat");

const getAiChat = async (socket, data) => {
  try {
    const { userId, characterId } = data;

    if (!userId || !characterId) {
      return socket.emit("error", {
        message: "Missing userId or characterId",
      });
    }

    const chat = await Chat.findOne({ user: userId, character: characterId })
      .populate("character", "name imageURL game")
      .populate("user", "userName email");

    if (!chat) {
      socket.emit("chatHistory", {
        messages: [],
        chatId: null,
        character: null,
      });

      return;
    }
    socket.emit("chatHistory", {
      messages: chat.messages,
      chatId: chat._id,
      character: chat.character,
    });
  } catch (error) {
    console.error("❌ Error fetching chat history:", error);
    socket.emit("error", {
      message: "Failed to load chat history",
      details: error.message,
    });
  }
};

module.exports = { getAiChat };
