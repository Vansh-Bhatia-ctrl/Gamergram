const multer = require("multer");

const storage = multer.memoryStorage();

const filterFile = (req, file, cb) => {
  if (
    file.mimetype.startsWith("image/") ||
    file.mimetype.startsWith("video/")
  ) {
    cb(null, true);
  } else {
    cb(new Error("File not recognized"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: filterFile,
  limits: { fileSize: 10 * 1024 * 1024 },
});

module.exports = upload;
