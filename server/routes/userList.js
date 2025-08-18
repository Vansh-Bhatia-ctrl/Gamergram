const express = require("express");
const { handleUserlist } = require("../controllers/userlistContorller");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.post("/user-list", validateAuth, handleUserlist);

module.exports = router;
