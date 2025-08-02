const Parser = require("rss-parser");
const parser = new Parser();
const fetch = require("node-fetch");
const cheerio = require("cheerio");

const XBOX_FEED_URL = "https://news.xbox.com/en-us/feed/";

const fetchXboxNews = async () => {
  try {
    const feed = await parser.parseURL(XBOX_FEED_URL);
    const news = await Promise.all(
      feed.items.map(async (item) => {
        const link = item.link;
        const response = await fetch(link, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
          },
        });
        const html = await response.text();
        const $ = cheerio.load(html);

        const article = $(".column--content").text().trim();

        return {
          title: item.title,
          description: item.contentSnippet || item.description,
          publishedDate: item.pubDate,
          link: link,
          detailedDescription: article,
          image: item.enclosure?.url || null,
          sourceName: "Xbox"
        };
      })
    );
    console.log(news);
    return news;
  } catch (error) {
    console.error("Error fetching Xbox news:", error);
    return [];
  }
};

module.exports = { fetchXboxNews };
