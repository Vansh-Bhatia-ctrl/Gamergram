const Post = require("../models/posts");
const streamifier = require("streamifier");
const cloudinary = require("cloudinary").v2;

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
      postedBy: req.user.id,
      createdAt: new Date(),
    });

    await newPost.save();

    res.status(200).json({ message: "Post uploaded successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again." });
  }
};

module.exports = { postToCloudinary };