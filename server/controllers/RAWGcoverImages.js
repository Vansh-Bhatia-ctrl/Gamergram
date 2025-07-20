require("dotenv").config();
const fetch = require("node-fetch");
const slugify = require("slugify");
const GameNews = require("../models/gameInfo");

const fetchGameInfo = async (req, res) => {
  const RAWG_API_KEY = process.env.RAWG_API_KEY;
  const totalPages = 10;

  try {
    for (let page = 1; page <= totalPages; page++) {
      const listResponse = await fetch(
        `https://api.rawg.io/api/games?page=${page}&page_size=50&ordering=-added&key=${RAWG_API_KEY}`
      );
      const listData = await listResponse.json();

      for (let game of listData.results) {
        try {
          // Fetch detailed game info
          const detailedResp = await fetch(
            `https://api.rawg.io/api/games/${game.slug}?key=${RAWG_API_KEY}`
          );
          const detail = await detailedResp.json();

          // Fetch screenshots
          const screenshotResponse = await fetch(
            `https://api.rawg.io/api/games/${game.id}/screenshots?key=${RAWG_API_KEY}`
          );
          const screenshotData = await screenshotResponse.json();
          const screenshots = screenshotData?.results?.map((s) => s.image) || [];

          // Fetch similar games
          const suggestedResp = await fetch(
            `https://api.rawg.io/api/games/${game.id}/suggested?key=${RAWG_API_KEY}`
          );

          let suggestedGames = [];
          if (suggestedResp.ok) {
            const suggestedDataText = await suggestedResp.text();
            if (suggestedDataText) {
              try {
                const suggestedData = JSON.parse(suggestedDataText);
                suggestedGames = suggestedData?.results?.map((s) => s.name) || [];
              } catch (jsonErr) {
                console.warn(`Could not parse suggested games for ${game.slug}`);
              }
            }
          }

          const newGame = new GameNews({
            title: detail.name,
            slug: slugify(detail.name, { lower: true }),
            coverImages: detail.background_image || "Unknown",
            screenshots,
            ratings: detail.rating || 0,
            releaseDate: detail.released || "Unknown",
            publisher: detail.publishers?.map((p) => p.name) || ["Unknown"],
            tags: detail.tags?.map((tag) => tag.name) || [],
            platforms: detail.platforms?.map((p) => p.platform.name) || [],
            genre: detail.genres?.map((g) => g.name) || [],
            storyLine: detail.description_raw || "",
            news: [],
            similarGames: suggestedGames,
          });

          await newGame.save();
          console.log(`Saved: ${detail.name}`);
        } catch (error) {
          console.error(`Error processing game ${game.slug}: ${error.message}`);
        }
      }
    }

    res.status(200).json({ message: "Games fetched and saved successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong.", error: error.message });
  }
};

module.exports = { fetchGameInfo };
