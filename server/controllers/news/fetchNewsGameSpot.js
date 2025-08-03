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

        let thumnail = null;

        const imageSelectors = [
          ".content-entity-image img",
          ".hero-image img",
          ".article-image img",

          // Media figure images
          ".media-figure img",
          ".media-img img",
          ".media-object img",

          // Promo/thumbnail images
          ".promo-image img",
          ".thumbnail img",

          // Generic article images
          ".article-header img",
          ".news-image img",

          // Fallback - any img with data-src or src in article
          "article img[src]",
          "img[data-src]",

          // OpenGraph meta tag as last resort
          'meta[property="og:image"]',
        ];

        for (const selector of imageSelectors) {
          if (selector.includes("meta")) {
            const metaImg = $(selector).attr("content");
            if (metaImg) {
              thumnail = metaImg;
              break;
            }
          } else {
            const imgElement = $(selector).first();
            if (imgElement.length) {
              let imgSrc =
                imgElement.attr("src") || imgElement.attr("data-src");
              if (imgSrc) {
                if (imgSrc.startsWith("//")) {
                  imgSrc = "https:" + imgSrc;
                } else if (imgSrc.startsWith("/")) {
                  imgSrc = "https://www.gamespot.com" + imgSrc;
                } else if (!imgSrc.startsWith("http")) {
                  imgSrc = "https://www.gamespot.com/" + imgSrc;
                }

                const width = imgElement.attr("width");
                const height = imgElement.attr("height");
                if (
                  (width && parseInt(width) < 100) ||
                  (height && parseInt(height) < 100)
                ) {
                  continue;
                }
                thumnail = imgSrc;
                break;
              }
            }
          }
        }
        if (!thumnail && item.enclosure?.url) {
          thumnail = item.enclosure?.url;
        }

        const fullArticleContent = articleContent.join("\n\n");
        const gameSpotArticle = {
          title: item.title,
          description: item.contentSnippet || item.description,
          publishedDate: item.pubDate,
          link: link,
          detailedDescription: fullArticleContent,
          image: thumnail,
          sourceName: "GameSpot",
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
