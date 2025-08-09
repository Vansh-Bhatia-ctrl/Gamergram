const cron = require("node-cron");
const { getYoutubeTrailers } = require("../controllers/youtubeContent");

const PLAYSTATION_CHANNEL = "UCLowtxcmEVx61ZClL_wCHTA";
const XBOX_CHANNEL = "UCjBp_7RuDBUYbd1LegWEJ8g";

const runPlaystationCronJob = async () => {
  try {
    cron.schedule("0 0 * * *", async () => {
      console.log("🕒 Running scheduled job to get videos...");
      await Promise.all([
        getYoutubeTrailers(PLAYSTATION_CHANNEL),
        getYoutubeTrailers(XBOX_CHANNEL),
      ]);

      console.log("✅ Finished scheduled job.");
    });
  } catch (error) {
    console.error("❌ Cron job failed:", error);
  }
};

module.exports = { runPlaystationCronJob };
