import { create } from "zustand";
import { io } from "socket.io-client";

const useChatStore = create((set, get) => ({
  socket: null,
  messages: [],
  chatId: null,
  aiTyping: false,

  connectSocket: (userId) => {
    if (!get().socket) {
      const socket = io(`${import.meta.env.VITE_API_URL}`);
      socket.on("connect", () => {
        console.log("🔗 Connected to backend:", socket.id);
        socket.emit("joinUser", userId);
      });

      socket.on("chatHistory", ({ messages, chatId }) => {
        set({ messages, chatId });
      });

      socket.on("messageReceived", ({ message, chatId }) => {
        set({ messages: [...get().messages, message], chatId });
      });

      socket.on("aiTyping", ({ isTyping }) => {
        set({ aiTyping: isTyping });
      });

      socket.on("aiResponse", ({ message, chatId }) => {
        set({ messages: [...get().messages, message], chatId });
      });

      set({ socket });
    }
  },

  sendMessage: (message, userId, characterId) => {
    const { socket, chatId } = get();
    if (socket) {
      socket.emit("sendMessage", {
        userID: userId,
        characterID: characterId,
        message,
        chatId,
      });
    }
  },

  getChatHistory: (userId, characterId) => {
    const { socket } = get();
    if (socket) {
      socket.emit("getChatHistory", { userId, characterId });
    }
  },
}));

export default useChatStore;
