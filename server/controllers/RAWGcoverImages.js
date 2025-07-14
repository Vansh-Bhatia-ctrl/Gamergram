require("dotenv").config();
const fetch = require("node-fetch");
const slugify = require("slugify");

const GameNews = require("../models/gameInfo");

const generateCoverImages = async (req, res) => {
  const RAWG_API_KEY = process.env.RAWG_API_KEY;

  try {
    const rawgResponse = await fetch(
      `https://api.rawg.io/api/games?page_size=50&ordering=-added&key=${RAWG_API_KEY}`
    );

    const data = await rawgResponse.json();
    const games = data.results;

    if (!games || games.length == 0) {
      return res.status(404).json({ message: "No games found" });
    }

    let savedGames = [];
    for (let game of games) {
      const slug = game.slug;
      const existing = await GameNews.findOne({ slug });
      if (existing) continue;

      const detailedResponse = await fetch(
        `https://api.rawg.io/api/games/${slug}?key=${RAWG_API_KEY}`
      );
      const detail = await detailedResponse.json();

      const screenshotResponse = await fetch(
        `https://api.rawg.io/api/games/${game.id}/screenshots?key=${RAWG_API_KEY}`
      );

      const screenshotData = await screenshotResponse.json();
      const screenshots = screenshotData.results.map((s) => s.image);

      const newGame = new GameNews({
        title: detail.name,
        slug: detail.slug,
        coverImages: detail.background_image || "",
        ratings: detail.rating || 0,
        reviews: [],
        storyLine: detail.description_raw || "",
        news: [],
        screenshots: screenshots,
      });
      await newGame.save();
      savedGames.push(newGame);
    }

    return res.status(200).json(savedGames);
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: "Somethin went wrong.", error: error.message });
  }
};

module.exports = { generateCoverImages };
