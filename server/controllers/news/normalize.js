const { fetchIGNnews } = require("./fetchNewsIGN");
const { fetchXboxNews } = require("./fetchNewsXbox");
const { fetchPlaystationNews } = require("./fetchNewsPlayStation");
const { fetchGameSpotNews } = require("./fetchNewsGameSpot");
const News = require("../../models/news");

const normalizeData = async () => {
  try {
    const allNews = [
      ...(await fetchIGNnews()),
      ...(await fetchXboxNews()),
      ...(await fetchPlaystationNews()),
      ...(await fetchGameSpotNews()),
    ];

    for (const items of allNews) {
      const {
        title,
        description,
        publishedDate,
        link,
        detailedDescription,
        image,
        sourceName,
      } = items;

      const existing = await News.findOne({ sourceLink: link });
      if (existing) continue;

      const news = new News({
        title: title?.trim(),
        summary: description?.trim(),
        detailedDescription: detailedDescription?.trim(),
        sourceLink: link,
        imageURL: image,
        sourceName: sourceName,
        publishedDate: publishedDate,
      });

      await news.save();
      console.log("✅ News normalization and saving done.");
    }
  } catch (error) {
    console.log("❌ Error normalizing news:", error);
  }
};

module.exports = { normalizeData };
