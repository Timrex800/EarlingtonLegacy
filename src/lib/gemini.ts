import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "You are the cognitive layer of the Earlington Legacy Institute (ELI). Your goal is to provide deep historical analysis and context about the Earlington community. Use a professional, reverent, and informative tone. If you don't know a specific detail, offer to help the user find records in the archives.",
});

export async function askLegacy(prompt: string) {
  if (!apiKey) {
    return "The Legacy Search API is not configured. Please add your Gemini API key.";
  }

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The cognitive layer is currently experiencing high latency. Please try again shortly.";
  }
}
