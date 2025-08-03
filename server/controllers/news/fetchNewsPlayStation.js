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

        let thumnail = null;

        const imageSelectors = [
          // PlayStation blog main image selectors
          ".post-single__hero img",
          ".hero-image img",
          ".featured-image img",
          ".post-header img",

          // PlayStation content images
          ".post-single__content img",
          ".entry-content img",
          ".wp-post-image",
          ".article-image img",

          // WordPress standard classes (PlayStation blog uses WordPress)
          ".wp-block-image img",
          ".alignfull img",
          ".size-full",

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
                  continue;
                }
                if (imgSrc.startsWith("//")) {
                  imgSrc = "https:" + imgSrc;
                } else if (imgSrc.startsWith("/")) {
                  imgSrc = "https://blog.playstation.com" + imgSrc;
                } else if (!imgSrc.startsWith("http")) {
                  imgSrc = "https://blog.playstation.com/" + imgSrc;
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
          sourceName: "Playstation",
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
