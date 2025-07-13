require("dotenv").config(); // to load your API key from .env
const { generateAiProfiles } = require("./config/generateAIProfile");
const { generateCoverImages } = require("./controllers/IGDBcoverimages");

(async () => {
  try {
    const profiles = await generateCoverImages();

    console.log("Generated Profiles:", profiles);
    console.log(JSON.stringify(profiles, null, 2)); // pretty print
  } catch (err) {
    console.error("Error generating AI profiles:", err);
  }
})();
