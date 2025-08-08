const express = require("express");
const { getAllNews } = require("../controllers/getAllNews");
const router = express.Router();

router.get("/getallnews", getAllNews);

module.exports = router;
