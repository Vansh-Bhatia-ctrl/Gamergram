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

        let thumnail = null;

        const imageSelectors = [
          // Xbox news main image selectors
          ".hero-image img",
          ".post-hero img",
          ".article-hero img",
          ".featured-image img",

          // Xbox content images
          ".column--content img",
          ".article-content img",
          ".post-content img",
          ".content-body img",

          // Xbox media containers
          ".media-container img",
          ".image-container img",
          ".post-thumbnail img",

          // Xbox specific classes
          ".xbox-image img",
          ".game-image img",
          ".news-image img",

          // Generic fallbacks
          "article img[src]",
          ".content img[src]",
          "img[data-src]",
          "img[data-original]",

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
                  continue;
                }
                if (imgSrc.startsWith("//")) {
                  imgSrc = "https:" + imgSrc;
                } else if (imgSrc.startsWith("/")) {
                  imgSrc = "https://news.xbox.com" + imgSrc;
                } else if (!imgSrc.startsWith("http")) {
                  imgSrc = "https://news.xbox.com/" + imgSrc;
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

        return {
          title: item.title,
          description: item.contentSnippet || item.description,
          publishedDate: item.pubDate,
          link: link,
          detailedDescription: article,
          image: thumnail,
          sourceName: "Xbox",
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
