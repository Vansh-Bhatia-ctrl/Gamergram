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

        let thumnail = null;

        const imageSelectors = [
          // IGN's main article image selectors
          ".article-hero-image img",
          ".hero-media img",
          ".lead-art img",
          ".article-header img",

          // IGN media containers
          ".jsx-image img",
          ".article-media img",
          ".featured-image img",

          // General IGN image classes
          ".article-content img",
          ".content-image img",
          ".preview-image img",

          // Video thumbnail fallbacks
          ".video-thumbnail img",
          ".media-thumbnail img",

          // Generic fallbacks
          "article img[src]",
          ".content img[src]",
          "img[data-src]",

          // OpenGraph meta tag
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
                imgElement.attr("data-src") ||
                imgElement.attr("data-original") ||
                imgElement.attr("src");
              if (imgSrc) {
                if (
                  imgSrc.startsWith("data:") ||
                  imgSrc.includes("base64") ||
                  imgSrc.includes("placeholder") ||
                  imgSrc.includes("1x1") ||
                  imgSrc === "about:blank"
                ) {
                  continue; // Skip this image
                }
                if (imgSrc.startsWith("//")) {
                  imgSrc = "https:" + imgSrc;
                } else if (imgSrc.startsWith("/")) {
                  imgSrc = "https://www.ign.com" + imgSrc;
                } else if (!imgSrc.startsWith("http")) {
                  imgSrc = "https://www.ign.com/" + imgSrc;
                }

                const width = imgElement.attr("width");
                const height = imgElement.attr("height");
                if (
                  (width && parseInt(width) < 100) ||
                  (height && parseInt(height) < 100)
                ) {
                  continue;
                }
                if (
                  imgSrc.includes("logo") ||
                  imgSrc.includes("icon") ||
                  imgSrc.includes("avatar")
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

        const detailedNews = {
          title: item.title,
          description: item.contentSnippet || item.description,
          publishedDate: item.pubDate,
          link: link,
          detailedDescription: articleContent,
          image: thumnail,
          sourceName: "IGN",
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
