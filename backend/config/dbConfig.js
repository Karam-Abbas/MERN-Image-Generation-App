import 'dotenv/config'
import mongoose from "mongoose";
import debug from "debug";  
const dbgr = debug("development:dbConfig.js");

mongoose
  .connect("mongodb://localhost:27017/ImageGenerator")
  .catch((error) => dbgr(`Connection to DB Failed reason: ${error}`))
  .then(() => dbgr("Connected to MongoDB successfully"));

export default mongoose.connection;
