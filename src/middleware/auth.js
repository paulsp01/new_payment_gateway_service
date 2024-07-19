const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    // Check for authorization token
    const token = req.header("Authorization");

    if (!token || !token.startsWith("Bearer ")) {
      return res
        .status(401)
        .send({ error: "Authorization token is missing or invalid" });
    }

    // Extract token string
    const tokenString = token.replace("Bearer ", "");

    // Verify token and decode user ID
    const decoded = jwt.verify(tokenString, process.env.JWT_SECRET);

    // Find user by ID from decoded token
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).send({ error: "User not found" });
    }

    // Attach user object to request for further middleware/routes
    req.user = user;
    next();
  } catch (error) {
    // Handle token verification errors
    console.error("Authentication error:", error.message);
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
