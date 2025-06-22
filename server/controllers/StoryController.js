require("dotenv").config();

const streamifier = require("streamifier");
const cron = require("node-cron");
const cloudinary = require("../config/cloudinary");
const Stories = require("../models/stories");

cron.schedule("*/5 * *  * *", async () => {
  try {
    await Stories.deleteMany({ expiryTime: { $lte: Date.now() } });
  } catch (error) {
    console.error("Something went wrong.");
  }
});

const postStoriesToCloudinary = async (req, res) => {
  try {
    const media = req.file;
    const userId = req.user?.id;

    if (!media) {
      return res.status(404).json({
        message: "Please select the media you want to post on your story.",
      });
    }

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized action." });
    }

    let mediaType;
    if (media.mimetype.startsWith("image/")) {
      mediaType = "image";
    } else if (media.mimetype.startsWith("video/")) {
      mediaType = "video";
    } else {
      throw new Error("Media type not recognized");
    }

    const streamMedia = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: mediaType,
            folder: "gamergram/stories",
          },
          (err, result) => {
            if (err) return reject(err);
            resolve(result);
          }
        );

        streamifier.createReadStream(media.buffer).pipe(stream);
      });
    };

    const result = await streamMedia();

    const newStory = new Stories({
      mediaURL: result.secure_url,
      publicId: result.public_id,
      mediaType: mediaType,
      caption: req.body.caption,
      userId: req.user.id,
      expiryTime: Date.now() + 24 * 60 * 60 * 1000,
    });

    await newStory.save();
    res.status(200).json(newStory);
  } catch (error) {
    console.log("error: ", error.message);
    res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { postStoriesToCloudinary };
