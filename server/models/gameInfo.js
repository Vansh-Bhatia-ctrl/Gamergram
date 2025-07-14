const mongoose = require("mongoose");

const gameNews = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  coverImages: { type: String, required: true },
  reviews: [
    {
      author: String,
      content: String,
      source: String,
      url: String,
    },
  ],
  ratings: { type: Number, required: true },
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

  createdAt: { type: Date, default: Date.now },
});

const GameNews = mongoose.model("GameNews", gameNews);

module.exports = GameNews;
