const { normalizeData } = require("./normalize");

const saveAllNews = async (req, res) => {
  try {
    await normalizeData();
    res.status(200).json({ message: "All news saved successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to save news." });
  }
};

module.exports = { saveAllNews };

// const startNewsCron = () => {
//   cron.schedule("0 10 */2 * *", async () => {
//     console.log("🕒 Running scheduled job to normalize news...");
//     await normalizeData();
//   });
// };

// module.exports = { startNewsCron };
