require("dotenv").config();
const Youtube = require("../models/youtube");
const fetch = require("node-fetch");

const getYoutubeTrailers = async (channelID) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const VIDEO_CHANNELS = [
    "UC-2Y8dQb0S6DtpxNgAKoJKA",
    "UCjBp_7RuDBUYbd1LegWEJ8g",
  ];

  const contentType = VIDEO_CHANNELS.includes(channelID) ? "video" : "gameplay";

  const URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channelID}&part=snippet&order=date&maxResults=20&type=video`;

  try {
    if (!YOUTUBE_API_KEY) {
      throw new Error("YouTube API key is not configured");
    }

    if (!channelID) {
      throw new Error("Channel ID is required");
    }

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(
        `YouTube API request failed: ${response.status} ${response.statusText}`
      );
    }

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
        type: contentType,
      });

      await newItem.save();
      newItems.push(newItem);
      console.log("items saved sucessfully", item.id.videoId);
    }

    console.log({
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
