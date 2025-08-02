const Parser = require("rss-parser");
const parser = new Parser();
const fetch = require("node-fetch");
const cheerio = require("cheerio");

const PLAYSTATION_FEED_URL = "https://blog.playstation.com/feed/";

const fetchPlaystationNews = async () => {
  try {
    const feed = await parser.parseURL(PLAYSTATION_FEED_URL);
    const news = await Promise.all(
      feed.items.map(async (item) => {
        const link = item.link;
        const response = await fetch(link);
        const html = await response.text();

        const $ = cheerio.load(html);

        const article = $(".post-single__content.single__content.entry-content")
          .text()
          .trim();

        return {
          title: item.title,
          description: item.contentSnippet || item.description,
          publishedDate: item.pubDate,
          link: link,
          detailedDescription: article,
          image: item.enclosure?.url || null,
          sourceName: "Playstation"
        };
      })
    );

    console.log(news);
    return news;
  } catch (error) {
    console.error("Error fetching Playstation news:", error);
    return [];
  }
};

module.exports = { fetchPlaystationNews };
