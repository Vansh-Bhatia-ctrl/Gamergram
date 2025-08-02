const Parser = require("rss-parser");
const parser = new Parser();
const fetch = require("node-fetch");
const cheerio = require("cheerio");

const IGN_FEED_URL = "https://feeds.ign.com/ign/all";

const fetchIGNnews = async () => {
  try {
    const feed = await parser.parseURL(IGN_FEED_URL);
    const news = await Promise.all(
      feed.items.map(async (item) => {
        const link = item.link;

        const detailedContent = await fetch(link);
        const html = await detailedContent.text();

        const $ = cheerio.load(html);
        const articleContent = $('[data-cy="article-content"]').text().trim();

        const detailedNews = {
          title: item.title,
          description: item.contentSnippet || item.description,
          publishedDate: item.pubDate,
          link: link,
          detailedDescription: articleContent,
          image: item.enclosure?.url || null,
          sourceName: "IGN"
        };

        return detailedNews;
      })
    );

    console.log(news);
    return news;
  } catch (error) {
    console.error("Error fetching IGN news:", error);
    return [];
  }
};

module.exports = { fetchIGNnews };
