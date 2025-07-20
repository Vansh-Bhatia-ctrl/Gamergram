const mongoose = require("mongoose");

const gameNews = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  coverImages: { type: String, required: true },
  screenshots: { type: [String], required: true },
  ratings: { type: Number, required: true },
  releaseDate: { type: String, required: true },
  publisher: [{ type: String, required: true }],
  tags: [{ type: String, required: true }],
  platforms: [{ type: String, required: true }],
  genre: [{ type: String, required: true }],
  storyLine: { type: String },
  news: [
    {
      title: String,
      summary: String,
      link: String,
      thumbnailUrl: String,
      publishedAt: Date,
      source: String,
    },
  ],
  similarGames: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

const GameNews = mongoose.model("GameNews", gameNews);

module.exports = GameNews;
