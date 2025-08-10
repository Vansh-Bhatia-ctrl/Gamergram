const express = require("express");
const { getNewsDetails } = require("../controllers/getNewsDetails");
const router = express.Router();

router.get("/:newsID", getNewsDetails);

module.exports = router;
