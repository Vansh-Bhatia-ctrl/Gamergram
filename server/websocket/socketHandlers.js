const { getAiChat } = require("../controllers/getAiChat");
const { handleNewMessage } = require("../controllers/handleMessage");

const handleSocketConnection = (io) => {
  io.on("connection", (socket) => {
    console.log("🔗 User connected:", socket.id);

    socket.on("joinUser", (userId) => {
      socket.join(`user_${userId}`);
      console.log(`👤 User ${userId} joined their room`);
    });

    socket.on("sendMessage", (data) => {
      handleNewMessage(socket, io, data);
    });

    socket.on("getChatHistory", (data) => {
      getAiChat(socket, data);
    });

    socket.on("userTyping", (data) => {
      socket.to(`chat_${data.chatId}`).emit("userTyping", {
        userId: data.userId,
        characterId: data.characterId,
        isTyping: data.isTyping,
      });
    });

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
    });

    socket.on("error", (error) => {
      console.error("🚫 Socket error:", error);
    });
  });
};

module.exports = { handleSocketConnection };
