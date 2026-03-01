const mongoose = require("mongoose");
const {
  config: { MONGODB_URL },
} = require("~/configs/config");

const databaseInitialization = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = databaseInitialization;
