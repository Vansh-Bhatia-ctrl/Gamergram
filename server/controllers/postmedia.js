require("dotenv").config();

const Post = require("../models/posts");
const streamifier = require("streamifier");
const cloudinary = require("../config/cloudinary");

const postToCloudinary = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file found." });
    }
    let mediaType;
    if (file.mimetype.startsWith("image/")) {
      mediaType = "image";
    } else if (file.mimetype.startsWith("video/")) {
      mediaType = "video";
    } else {
      throw new Error("Post type not recognized.");
    }

    const streamToCloudinary = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: mediaType,
            folder: "gamergram/posts",
          },
          (err, result) => {
            if (err) return reject(err);
            resolve(result);
          }
        );
        streamifier.createReadStream(file.buffer).pipe(stream);
      });
    };

    const result = await streamToCloudinary();

    const newPost = new Post({
      mediaURL: result.secure_url,
      publicId: result.public_id,
      mediaType: mediaType,
      caption: req.body.caption,
      userId: req.user.id,
      createdAt: new Date(),
    });

    await newPost.save();

    res.status(200).json({ message: "Post uploaded successfully." });
  } catch (error) {
    console.log("error: ", error.message);
    console.log("API_KEY: ", process.env.CLOUDINARY_API_KEY);
    res.status(500).json({
      message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { postToCloudinary };
