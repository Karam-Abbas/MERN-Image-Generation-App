import "dotenv/config";
import mongoose from "mongoose";
import debug from "debug";
const dbgr = debug("development:dbConfig.js");

try {
  await mongoose.connect("mongodb://localhost:27017/ImageGenerator");
  dbgr("Connected to MongoDB successfully");
} catch (error) {
  dbgr(`Connection to DB Failed reason: ${error}`);
}

export default mongoose.connection;
