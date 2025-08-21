const Reviews = require("../models/reviews");

const fetchReviews = async (req, res) => {
  try {
    const userId = req.user.id;
    const userName = req.user.userName;

    if (!userId || !userName) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    const reviews = await Reviews.find();
    if (!reviews) {
      return res.status(400).json({ message: "No reviews added." });
    }

    return res.status(200).json(reviews);
  } catch (error) {
    console.log("Error fetching reviews from DB: ", error.message);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { fetchReviews };
