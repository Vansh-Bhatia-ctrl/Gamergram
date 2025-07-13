require("dotenv").config();
const fetch = require("node-fetch");
const { generateTokenAccess } = require("../utils/twitchAuth");

const generateCoverImages = async (req, res) => {
  try {
    const accessToken = await generateTokenAccess();

    const IGDBresponse = await fetch("https://api.igdb.com/v4/covers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Client-ID": process.env.TWITCH_CLIENT_ID,
      },
      body: "fields image_id, url, width, height; limit 50;",
    });

    const data = await IGDBresponse.json();
    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong, please try again." });
  }
};

module.exports = { generateCoverImages };
