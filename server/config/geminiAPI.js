require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const APIkey = process.env.GEMINI_API_KEY;

if (!APIkey) {
  throw new Error("GEMINI_API_KEY not found in environment variables");
}

const genAI = new GoogleGenerativeAI(APIkey);

module.exports = genAI;
