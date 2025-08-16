require("dotenv").config();
const openai = require("../config/openai");
const AiProfiles = require("../models/aiprofiles");

const saveAiDataToDB = async (req, res) => {
  try {
    const prompt = `Generate 20 video game characters profile including Arthur morgan from Red Dead Redemption 2 in JSON format exactly following this schema:

{
  "name": "Character's full name",
  "game": "The game they appear in",
  "symbol": "A single emoji or symbol representing them (optional)",
  "bio": "A short 1-2 sentence bio describing their story and traits",
  "tag": "A short descriptive tag, e.g., 'Spartan Super Soldier'",
  "specialty": "Their unique skill, power, or role in the game"
}

Please provide realistic and creative entries. Only respond with valid JSON.`;

    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 2500,
    });

    const message = chatResponse.choices[0].message.content;

    let profileData;
    try {
      profileData = JSON.parse(message);
    } catch (err) {
      const jsonMatch = message.match(/\[.*\]/s);
      if (jsonMatch) profileData = JSON.parse(jsonMatch[0]);
      else throw err;
    }

    const savedProfiles = await AiProfiles.insertMany(profileData);

    return res.status(201).json({
      message: "Added profiles successfully",
      profiles: savedProfiles,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong, please try again!" });
  }
};

module.exports = { saveAiDataToDB };
