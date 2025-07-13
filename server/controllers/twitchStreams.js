require("dotenv").config();
const fetch = require("node-fetch");
const { generateTokenAccess } = require("../utils/twitchAuth");

const fetchLiveStreams = async (req, res) => {
  const accessToken = await generateTokenAccess();
  try {
    const twitchResponse = await fetch("https://api.twitch.tv/helix/streams", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Client-ID": process.env.TWITCH_CLIENT_ID,
      },
    });

    const data = await twitchResponse.json();
    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong, please try again." });
  }
};

module.exports = { fetchLiveStreams };
