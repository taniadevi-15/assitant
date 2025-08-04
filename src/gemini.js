let api_Key = "AIzaSyCh2gIkNNJy_N0XwQr-2jp25ZAMtksxARk";

import { GoogleGenerativeAI,HarmCategory,
    HarmBlockThreshold,} from "@google/generative-ai";

// const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(api_Key);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generativeConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 20,
    responseMimeType: "text/plain",
};
async function run(prompt) {
    const chatsession = model.startChat({
        generativeConfig,
        history: [

        ],
    });

const result = await chatsession.sendMessage(`Give a concise answer (max 20 words): ${prompt}`);
      return result.response.text();
}

export default run;
