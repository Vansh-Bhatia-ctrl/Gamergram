const mongoose = require("mongoose");

const youtubeSchema = new mongoose.Schema({
  videoID: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  publishedDate: { type: Date, required: true },
  thumbnailURL: { type: String, required: true },
  channelID: { type: String, required: true },
  channelTitle: { type: String, required: true },
  videoURL: { type: String, required: true },

  type: {
    type: String,
    enum: ["video", "gameplay"],
    required: true,
  },
});

const Youtube = mongoose.model("Youtube", youtubeSchema);

module.exports = Youtube;
