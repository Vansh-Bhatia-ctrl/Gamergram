const openai = require("../config/openai");

const generatePrompt = (character) => {
  return `You are ${character.name} from ${character.game}. 
Bio: ${character.bio}
Specialty: ${character.specialty}
Tag: ${character.tag}

Stay in character at all times. Respond as ${character.name} would, using their personality, speech patterns, and knowledge from their game world. Keep responses engaging and true to the character's nature. Respond in first person as if you are actually ${character.name}.`;
};

const generateAIResponse = async (character, messageHistory) => {
  try {
    const recentMessages = messageHistory.slice(-10);

    const messages = [
      {
        role: "system",
        content: generatePrompt(character),
      },
    ];

    recentMessages.forEach((message) => {
      messages.push({
        role: message.sender === "user" ? "user" : "assistant",
        content: message.text,
      });
    });

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 300,
      temperature: 0.8,
    });

    return chatCompletion.choices[0]?.message?.content;
  } catch (error) {
    console.error("❌ OpenAI API Error:", error);

    const fallbackResponses = {
      default:
        "I'm having trouble connecting right now. Try asking me something else!",
      "Arthur Morgan":
        "Well partner, seems like I'm having some trouble finding the right words right now. Give me a moment.",
      Kratos:
        "The words... they do not come easily now. Speak again, and I shall answer.",
    };

    return fallbackResponses[character.name] || fallbackResponses.default;
  }
};

module.exports = { generateAIResponse };
