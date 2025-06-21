const mongoose = require("mongoose");

const storiesSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mediaURL: { type: String, required: true },
    mediaType: { type: String, enum: ["image", "video"] },
    caption: { type: String, required: true },
    expiryTime: {
      type: Date,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Stories = mongoose.model("Stories", storiesSchema);

module.exports = Stories;
