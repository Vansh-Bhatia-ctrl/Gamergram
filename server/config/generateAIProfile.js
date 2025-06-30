const openai = require("./openai");

const generateAiProfiles = async () => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a character generator for a gaming app. Only generate existing, iconic video game characters (e.g., Kratos, Nathan Drake, Altair, Lara Croft, Master Chief, etc). Respond ONLY in pure JSON format. For each character, include: userName, Name, email, bio, and a realistic profile picture URL. Do NOT invent new characters. Respond with a JSON array.",
      },
      {
        role: "user",
        content:
          "Generate 9 iconic gaming characters with the fields: userName, Name, email, bio, and a realistic profile picture URL.",
      },
    ],
    temperature: 0.9,
  });

  const content = response.choices[0].message.content.trim();

  const cleaned = content
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "");

  const characters = JSON.parse(cleaned);

  return characters;
};

module.exports = { generateAiProfiles };
