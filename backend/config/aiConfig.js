import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs/promises';

const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash-exp-image-generation',
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
};

async function run(input) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });
        const result = await chatSession.sendMessage(input);
        const response = result.response;
        if (response.candidates && response.candidates.length > 0 &&
            response.candidates[0].content && response.candidates[0].content.length > 0 &&
            response.candidates[0].content[0].parts && response.candidates[0].content[0].parts.length > 0) {

            const textData = response.candidates[0].content[0].parts[0].text;

            if (textData.includes("base64,")) {
                const base64Data = textData.split("base64,")[1];
                const imageBuffer = Buffer.from(base64Data, 'base64');
                const filename = 'generated_image.png'; // or .jpg
                await fs.writeFile(filename, imageBuffer);
                console.log(`Image saved to ${filename}`);
            } else {
                console.log("base64 data not found in response.");
                console.log(textData);
            }
        } else {
            console.error('Error: Unexpected response structure from API.');
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

run('create a realistic image of a beautiful mountain range');