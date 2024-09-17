

API_KEY = "AIzaSyDeyA863E10za8PhYsXyKSjJPWZb62u0No";
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);
import { GoogleGenerativeAI } from "@google/generative-ai";
let btn = document.querySelector('#send-btn');
let userInput = document.querySelector('.input-field');

let messageContainer = document.querySelector('#message-container');

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  

  const prompt = userInput;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();