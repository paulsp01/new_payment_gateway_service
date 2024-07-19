const express = require("express");
const { loginUser } = require("../controllers/authController");

const router = express.Router();

// POST /login - User login
router.post("/login", loginUser);

module.exports = router;