const News = require("../models/news");

const getNewsDetails = async (req, res) => {
  try {
    const { newsID } = req.params;

    if (!newsID) {
      return res.status(404).json({ message: "No newsID found" });
    }

    const newsDetails = await News.findById(newsID);

    if (!newsDetails) {
      return res.status(404).json({ message: "News not found" });
    }

    return res.status(200).json(newsDetails);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { getNewsDetails };
