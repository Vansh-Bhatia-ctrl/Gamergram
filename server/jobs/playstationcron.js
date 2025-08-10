const cron = require("node-cron");
const { getYoutubeTrailers } = require("../controllers/youtubeContent");

const PLAYSTATION_CHANNEL = "UC-2Y8dQb0S6DtpxNgAKoJKA";
const XBOX_CHANNEL = "UCjBp_7RuDBUYbd1LegWEJ8g";
const MKICEANDFIRE_CHANNEL = "UC1bwliGvJogr7cWK0nT2Eag";
const THERADBRAD_CHANNEL = "UCpqXJOEqGS-TCnazcHCo0rA";
const SHIRRAKO_CHANNEL = "UC7eAfUjR9gdIjoaoQaS0W-A";

const runPlaystationCronJob = async () => {
  try {
    cron.schedule("0 0 * * *", async () => {
      console.log("🕒 Running scheduled job to get videos...");
      await Promise.all([
        getYoutubeTrailers(PLAYSTATION_CHANNEL),
        getYoutubeTrailers(XBOX_CHANNEL),
        getYoutubeTrailers(MKICEANDFIRE_CHANNEL),
        getYoutubeTrailers(THERADBRAD_CHANNEL),
        getYoutubeTrailers(SHIRRAKO_CHANNEL),
      ]);

      console.log("✅ Finished scheduled job.");
    });
  } catch (error) {
    console.error("❌ Cron job failed:", error);
  }
};

module.exports = { runPlaystationCronJob };
