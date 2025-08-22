const Quiz = require("../models/quiz");

const fetchUserQuizDetails = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({ message: "User must be authenticated." });
    }
    const userData = await Quiz.find({ userId });

    if (!userData || userData.length === 0) {
      return res.status(200).json({
        quizesWon: 0,
        quizesLost: 0,
        quizesPlayed: 0,
        score: 0,
        questions: [],
        isWon: false,
      });
    }

    return res.status(200).json(userData);
  } catch (error) {
    console.log("Error fetching data: ", error.message);
    return res.status(500).json({
      message: "Something went wrong, please try again",
      error: error.message,
    });
  }
};

module.exports = { fetchUserQuizDetails };
