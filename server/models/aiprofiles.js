const mongoose = require("mongoose");

const aiProfiles = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
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












