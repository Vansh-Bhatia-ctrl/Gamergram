const News = require("../models/news");

const getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again!" });
  }
};

module.exports = { getAllNews };
