import "dotenv/config";
import express from "express";
import debug from "debug";
import "./config/dbConfig.js";
import ImageGenerator from "./config/aiConfig.js";
const dbgr = debug("development:App.js");
const app = express();

import cors from "cors";
app.use(cors());
  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/", async (req, res) => {
    try {
      const { prompt } = req.body;
      
      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }
      let imageUrl = await ImageGenerator(prompt);
      console.log("Generated Image URL:", imageUrl);
      res.send(imageUrl.data[0].url);

    } catch (error) {
      console.error("Error generating image:", error);
      res.status(500).json({
        error: "Failed to generate image",
        details: error.message
      });
    }
  });

app.listen(process.env.PORT, () => {
  dbgr(`Listening to Port:${process.env.PORT}`);
});
