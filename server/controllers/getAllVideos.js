const Youtube = require("../models/youtube");

const getAllVideos = async (req, res) => {
  try {
    const videos = await Youtube.find();
    res.status(200).json(videos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again!" });
  }
};

module.exports = { getAllVideos };
