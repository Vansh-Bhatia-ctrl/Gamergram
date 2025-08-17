const mongoose = require("mongoose");

const aiProfiles = new mongoose.Schema({
  characterId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
});

const AiProfiles = mongoose.model("AiProfiles", aiProfiles);

module.exports = AiProfiles;
