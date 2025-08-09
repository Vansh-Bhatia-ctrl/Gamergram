require("dotenv").config();
const Youtube = require("../models/youtube");
const fetch = require("node-fetch");

const getYoutubeTrailers = async (req, res) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCjBp_7RuDBUYbd1LegWEJ8g";
  const URL = `https://www.googleapis.com/youtube/v3/search
?key=${YOUTUBE_API_KEY}
&channelId=${CHANNEL_ID}
&part=snippet
&order=date
&maxResults=20
&type=video`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    const items = data.items;
    const newItems = [];

    for (const item of items) {
      const existingItem = await Youtube.findOne({ videoID: item.id.videoId });

      if (existingItem) continue;

      const newItem = new Youtube({
        videoID: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedDate: new Date(item.snippet.publishedAt),
        thumbnailURL: `https://img.youtube.com/vi/${item.id.videoId}/maxresdefault.jpg`,
        channelID: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle,
        videoURL: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      });

      await newItem.save();
      newItems.push(newItem);
      console.log("items saved sucessfully", item.id.videoId);
    }

    res.status(200).json({
      success: true,
      message: "YouTube videos fetched and saved successfully",
      data: {
        totalFetched: items.length,
        newItemsSaved: newItems.length,
        savedItems: newItems,
      },
    });
  } catch (error) {
    console.log("Error saving the data to DB", error.message);
  }
};

module.exports = { getYoutubeTrailers };
