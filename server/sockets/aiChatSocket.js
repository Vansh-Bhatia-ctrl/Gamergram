const { handleChatSave } = require("../controllers/chatController");

const aiChatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected on socketID: ", socket.id);

    socket.on("sendMessage", (data) => {
      handleChatSave(socket, data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
  });
};

module.exports = aiChatSocket;
