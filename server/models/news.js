const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
    aiSummary: {
      type: String,
    },
    detailedDescription: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    sourceLink: {
      type: String,
      required: true,
      unique: true,
    },
    sourceName: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    publishedDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model("News", newsSchema);

module.exports = News;
