require("dotenv").config();
const fetch = require("node-fetch");

const tokenCache = {
  accessToken: null,
  expiryTime: null,
};

async function generateTokenAccess() {
  const now = Date.now();

  if (tokenCache.accessToken && tokenCache.expiryTime > now) {
    return tokenCache.accessToken;
  }
  const req = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: "client_credentials",
    }),
  });

  const data = await req.json();
  tokenCache.accessToken = data.access_token;
  tokenCache.expiryTime = now + data.expires_in * 1000;

  return tokenCache.accessToken;
}

module.exports = { generateTokenAccess };
