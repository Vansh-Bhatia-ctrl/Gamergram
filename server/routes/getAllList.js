const express = require("express");
const { getList } = require("../controllers/getListController");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.get("/get-userlist", validateAuth, getList);

module.exports = router;
