const cron = require("node-cron");
const { normalizeData } = require("./normalize");

const startNewsCron = () => {
  cron.schedule("0 10 */2 * *", async () => {
    console.log("🕒 Running scheduled job to normalize news...");
    await normalizeData();
  });
};

module.exports = { startNewsCron };
