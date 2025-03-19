import "dotenv/config";
import express from "express";
import debug from "debug";
import "./config/dbConfig.js";
import ImageGenerator from "./config/aiConfig.js";
import imageModel from "./models/imageModel.js";
const dbgr = debug("development:App.js");
const app = express();

import cors from "cors";
app.use(cors());
  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", async (req, res) => {
  try {
    const images = await imageModel.find({});
    res.send(images);
  } catch (error) {
    console.error("Error Fetching Images:", error);
    res.status(500).json({
      error: "Failed to fetch images",
      details: error.message
    });
  }
})

app.post("/", async (req, res) => {
    try {
      const { prompt } = req.body;
      
      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }
      let imageUrl = await ImageGenerator(prompt);
      const image  = await imageModel.create({
        prompt,
        image: imageUrl.data[0].url,
      })
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
