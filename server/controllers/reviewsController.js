const Reviews = require("../models/reviews");

const postReviews = async (req, res) => {
  try {
    const userId = req.user.id;
    const userName = req.user.userName;
    const { gameName, rating, review } = req.body;
    if (!userId || !userName) {
      return res.status(401).json({ message: "User must be authenticated." });
    }

    if (!gameName || !rating || !review) {
      return res.status(401).json({ message: "Required fields are missing." });
    }

    const newReview = new Reviews({
      userId: userId,
      userName: userName,
      gameName: gameName,
      rating: rating,
      review: review,
    });

    const savedReview = await newReview.save();
    return res.status(200).json(savedReview);
  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { postReviews };
