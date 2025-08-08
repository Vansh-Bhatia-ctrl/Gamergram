const cron = require("node-cron");
const { normalizeData } = require("./normalize");

const saveAllNews = async (req, res) => {
  try {
    await normalizeData();
    res.status(200).json({ message: "All news saved successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to save news." });
  }
};

const startNewsCron = () => {
  let lastRun = Date.now() - 2 * 24 * 60 * 60 * 1000;

  cron.schedule("0 10 * * *", async () => {
    const now = Date.now();
    if (now - lastRun >= 2 * 24 * 60 * 60 * 1000) {
      console.log("🕒 Running scheduled job to normalize news...");
      try {
        await normalizeData();
        lastRun = now;
      } catch (error) {
        console.error("❌ Cron job failed:", error);
      }
    }
  });
};

module.exports = { startNewsCron, saveAllNews };
