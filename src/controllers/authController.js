const jwt = require("jsonwebtoken");
const User = require("../models/User"); 



const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
   
    const user = await User.findOne({ username });

    if (!user || !user.isValidPassword(password)) {
      // User not found or invalid credentials
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, {
      expiresIn: "1h",
    });

    // Respond with token
    res.json({ token });
  } catch (err) {
    next(err); // Forward error to error handler middleware
  }
};

module.exports = {
  loginUser,
};
