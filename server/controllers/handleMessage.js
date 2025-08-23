const Chat = require("../models/aiChat");
const AiProfiles = require("../models/aiprofiles");
const { generateAIResponse } = require("./generateAiResponse");

const handleNewMessage = async (socket, io, data) => {
  try {
    const { userID, characterID, message, chatId } = data;

    console.log("📨 New message received:", { userID, characterID, message });

    if (!userID || !characterID || !message) {
      return socket.emit("error", { message: "Missing required fields." });
    }

    const character = await AiProfiles.findById(characterID);
    if (!character) {
      return socket.emit("error", { message: "Character not found." });
    }

    let chat;
    if (chatId) {
      chat = await Chat.findById(chatId);
    } else {
      chat = await Chat.findOne({ user: userID, character: characterID });
    }

    if (!chat) {
      chat = new Chat({
        user: userID,
        character: characterID,
        messages: [],
      });
    }

    const userMessage = {
      sender: "user",
      text: message,
      timeStamp: new Date(),
    };

    chat.messages.push(userMessage);
    await chat.save();

    socket.emit("messageReceived", {
      chatId: chat._id,
      message: userMessage,
      character: {
        name: character.name,
        imageURL: character.imageURL,
      },
    });

    socket.emit("aiTyping", {
      characterName: character.name,
      isTyping: true,
    });

    const aiResponse = await generateAIResponse(character, chat.messages);

    const aiMessage = {
      sender: "ai",
      text: aiResponse,
      timeStamp: new Date(),
    };

    chat.messages.push(aiMessage);
    await chat.save();

    socket.emit("aiTyping", {
      characterName: character.name,
      isTyping: false,
    });

    socket.emit("aiResponse", {
      chatId: chat._id,
      message: aiMessage,
      character: {
        name: character.name,
        imageURL: character.imageURL,
      },
    });

    console.log("✅ Message processed successfully");
  } catch (error) {
    console.error("❌ Error handling message:", error);
    socket.emit("error", {
      message: "Failed to process message",
      details: error.message,
    });
  }
};

module.exports = { handleNewMessage };
