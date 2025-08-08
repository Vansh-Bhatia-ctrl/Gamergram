require("dotenv").config(); // to load your API key from .env
const { startNewsCron } = require("./controllers/news");

(async () => {
  try {
    const profiles = await startNewsCron();

    console.log("Generated Profiles:", profiles);
    console.log(JSON.stringify(profiles, null, 2)); // pretty print
  } catch (err) {
    console.error("Error generating AI profiles:", err);
  }
})();
