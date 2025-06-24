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
          "Generate a fictional character with username, full name, and a cool bio.",
      },
    ],
    temperature: 0.9,
    n: 9,
  });

  const charecter = response.choices.map((choice) =>
    JSON.parse(choice.message.content)
  );

  return charecter;
};

module.exports = { generateAiProfiles };
