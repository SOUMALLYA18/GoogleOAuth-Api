const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    log.error("Datbase connection error");
    process.exit(1);
  }
};

module.exports = db