const mongoose = require("mongoose");

const gameCharactersSchema = new mongoose.Schema({
  characterId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  bgGlow: {
    type: String,
    required: true,
  },
  borderGlow: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const GameCharacters = mongoose.model(
  "GameCharacters",
  gameCharactersSchema
);

module.exports = GameCharacters;
