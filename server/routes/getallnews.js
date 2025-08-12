const express = require("express");
const { getAllNews } = require("../controllers/getAllNews");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.get("/getallnews", validateAuth, getAllNews);

module.exports = router;
