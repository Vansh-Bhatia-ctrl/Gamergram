const User = require("../models/user");
const Post = require("../models/post");
const cron = require("node-cron");
const openai = require("../config/openai");
const cloudinary = require("../config/cloudinary");

const characterPromptMap = {
  kratos_godofwar: {
    captionPrompt:
      "Write a powerful, intense post in the voice of a battle-hardened warrior reflecting on vengeance, destiny, or inner strength. Keep it under 30 words.",
    imagePrompt:
      "A rugged warrior with a beard and axe in a snow-covered mountain battlefield, inspired by Norse mythology, with dramatic cinematic lighting",
  },
  lara_croft_89: {
    captionPrompt:
      "Write an adventurous post from an explorer navigating ancient ruins, surviving traps, or discovering long-lost secrets. Keep it under 30 words.",
    imagePrompt:
      "A female adventurer exploring a dense jungle temple, surrounded by relics and torches, in a dynamic, cinematic adventure setting",
  },
  master_chief_117: {
    captionPrompt:
      "Write a calm, tactical update from a futuristic soldier during a mission about strategy, AI support, or battle readiness. Keep it under 30 words.",
    imagePrompt:
      "A futuristic armored soldier with a plasma rifle standing in a sci-fi battlefield, starry sky and metallic structures in the background",
  },
  nathan_drake_88: {
    captionPrompt:
      "Write a clever and sarcastic post from a treasure hunter about risky adventures, ancient puzzles, or wild escapes. Keep it under 30 words.",
    imagePrompt:
      "A charming adventurer swinging across ruins in a jungle, ancient treasure visible in the background, cinematic exploration scene",
  },
  ezio_auditore: {
    captionPrompt:
      "Write a cryptic and noble post from a hooded figure who values freedom, justice, and secrecy. Keep it under 30 words.",
    imagePrompt:
      "A hooded vigilante with a hidden blade standing atop a Renaissance-style rooftop at dusk, shadows and old city buildings in the background",
  },
  solid_snake: {
    captionPrompt:
      "Write a stealthy and strategic post from a covert operative on a night mission involving high-tech surveillance. Keep it under 30 words.",
    imagePrompt:
      "A tactical agent in stealth gear inside a dimly-lit corridor with cyberpunk elements and futuristic military equipment",
  },
  mario_red_hat: {
    captionPrompt:
      "Write a joyful, quirky post from a cheerful adventurer who loves jumping, collecting power items, and helping friends. Keep it under 30 words.",
    imagePrompt:
      "A cartoonish hero with a red cap jumping mid-air with mushrooms and colorful hills in the background, in a bright, joyful fantasy world",
  },
  sonic_speed: {
    captionPrompt:
      "Write an upbeat and energetic post from a fast-moving hero who loves racing through wild landscapes and dodging obstacles. Keep it under 30 words.",
    imagePrompt:
      "A speedy blue creature dashing through a lush green landscape with golden rings and motion blur, in a colorful cartoon style",
  },
  princess_peach: {
    captionPrompt:
      "Write a graceful and heartwarming post from a kind leader who values peace, friendship, and magical kingdoms. Keep it under 30 words.",
    imagePrompt:
      "A gentle princess in a pink dress standing in a floral palace garden with soft skies and magical sparkles in the air",
  },
};

const startAiScheduler = () => {
  cron.schedule("0 9 * * *", async () => {
    console.log("Generating posts and stories");

    try {
      const aiUsers = await User.find({ isAI: true });

      for (const user of aiUsers) {
        const prompt = characterPromptMap[user.userName];

        if (!prompt) {
          console.log(`${user.userName} not found, skipping`);
          continue;
        }

        const captionResponse = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: prompt.captionPrompt,
            },
          ],
          temperature: 0.8,
        });

        const caption = await captionResponse.choices[0].message.content.trim();

        const imageResponse = await openai.images.generate({
          model: "dall-e-3",
          prompt: prompt.imagePrompt,
          n: 1,
          size: "1024x1024",
        });

        const imageURL = imageResponse.data[0].url;

        const postToCloudinary = await cloudinary.uploader.upload(imageURL, {
          folder: "gamergram/posts",
        });

        await Post.create({
          userId: user._id,
          caption: caption,
          mediaURL: postToCloudinary.secure_url,
          publicId: postToCloudinary.public_id,
          mediaType: "image",
          createdAt: new Date(),
        });

        console.log(`${user.userName} posted: ${caption}`);
      }
    } catch (err) {
      console.error("❌ AI post generation failed:", err.message);
    }
  });
};

module.exports = { startAiScheduler };
