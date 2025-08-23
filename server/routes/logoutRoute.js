const express = require("express");
const { logOut } = require("../controllers/authController");
const { validateAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.post("/log-out", validateAuth, logOut);

module.exports = router;
