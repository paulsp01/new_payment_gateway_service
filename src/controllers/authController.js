const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET || "ABC";

const signupUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "name, email, and password are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

   
    const token = jwt.sign({ id: newUser._id },  { expiresIn: "1h" });

    
    res.status(201).json({ token });
  } catch (error) {
    next(error); 
  }
};


const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id },  { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signupUser,
  loginUser,
};
