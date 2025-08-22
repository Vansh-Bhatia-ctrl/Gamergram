const Quiz = require("../models/quiz");

const saveQuizData = async (req, res) => {
  try {
    const userId = req.user.id;
    const { quizesWon, quizesPlayed, score, isWon, quizesLost } = req.body;

    if (!userId) {
      return res.status(401).json({ message: "User must be authenticated." });
    }

    if (
      quizesLost === undefined ||
      quizesPlayed === undefined ||
      quizesWon === undefined ||
      score === undefined ||
      isWon === undefined
    ) {
      return res.status(400).json({ message: "Required fileds missing." });
    }

    const updatedUserData = await Quiz.findOneAndUpdate(
      { userId },
      {
        $set: {
          quizesWon,
          quizesPlayed,
          quizesLost,
          score,
          isWon,
        },
      },
      { new: true, upsert: true }
    );

    const newUserData = await updatedUserData.save();
    return res.status(200).json(newUserData);
  } catch (error) {
    console.log("Error saving user data: ", error.message);
    return res
      .status(500)
      .json({ message: "Something went wrong.", error: error.message });
  }
};

module.exports = { saveQuizData };
