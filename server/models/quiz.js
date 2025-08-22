const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  quizesWon: {
    type: Number,
    required: true,
  },
  quizesPlayed: {
    type: Number,
    required: true,
  },
  quizesLost: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  isWon: {
    type: Boolean,
    default: false,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
