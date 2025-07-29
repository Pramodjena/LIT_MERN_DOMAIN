import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generateResponse = async (prompt) => {
  try {
    // Use the latest model name and API version
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest", // Updated model name
    });

    const result = await model.generateContent(prompt);
    return await result.response.text();
  } catch (error) {
    console.error("API Error:", error);
    return "Sorry, I couldn't process that request. Please try again.";
  }
};
