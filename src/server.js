require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;


console.log("Environment Variables:", {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
