require("dotenv").config(); // to load your API key from .env
const { generateAiProfiles } = require("./config/generateAIProfile");

(async () => {
  try {
    const profiles = await generateAiProfiles();

    console.log("Generated Profiles:");
    console.log(JSON.stringify(profiles, null, 2)); // pretty print
  } catch (err) {
    console.error("Error generating AI profiles:", err);
  }
})();
