const Parser = require("rss-parser");
const parser = new Parser();
const fetch = require("node-fetch");
const cheerio = require("cheerio");

const GAMESPOT_NEWS = "https://www.gamespot.com/feeds/news/";

const fetchGameSpotNews = async () => {
  try {
    const feed = await parser.parseURL(GAMESPOT_NEWS);
    const news = await Promise.all(
      feed.items.map(async (item) => {
        const link = item.link;

        const response = await fetch(link);
        const html = await response.text();
        const $ = cheerio.load(html);

        const articleContent = [];

        $(".js-content-entity-body.content-entity-body p").each((i, el) => {
          articleContent.push($(el).text().trim());
        });

        const fullArticleContent = articleContent.join("\n\n");
        const gameSpotArticle = {
          title: item.title,
          description: item.contentSnippet || item.description,
          publishedDate: item.pubDate,
          link: link,
          detailedDescription: fullArticleContent,
          image: item.enclosure?.url || null,
          sourceName: "GameSpot"
        };

        return gameSpotArticle;
      })
    );
    console.log(news);
    return news;
  } catch (error) {
    console.error("Error fetching GameSpot news:", error);
    return [];
  }
};

module.exports = { fetchGameSpotNews };
