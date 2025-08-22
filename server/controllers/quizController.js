const fetch = require("node-fetch");

const getQuiz = async (req, res) => {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=15&type=multiple"
    );

    if (!response.ok) {
      return res
        .status(400)
        .json({ message: "Error fetching quizes from API." });
    }

    const data = await response.json();
    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(500).json({
      message: "Something went wrong please try again.",
      error: error.message,
    });
  }
};

module.exports = { getQuiz };
