const openai = require("./openai");

const generateAiProfiles = async () => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a character generator for a gaming app. Respond ONLY in JSON.",
      },
      {
        role: "user",
        content:
          "Generate a fictional character with userName, Name, email, and a bio and a realistic profile picture URL (image link).",
      },
    ],
    temperature: 0.9,
    n: 9,
  });

  const characters = response.choices.map((choice) =>
    JSON.parse(choice.message.content)
  );

  return characters;
};

module.exports = { generateAiProfiles };
