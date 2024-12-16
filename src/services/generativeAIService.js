import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked";

// API Key langsung dalam file
const apiKey = "AIzaSyC36rN9xTqXajI052P7TDMEF0NuqH9Nid4"; // Ganti dengan API key Anda
const genAI = new GoogleGenerativeAI(apiKey);

export const generateContent = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);

    // Convert markdown ke plain text dan hapus tag HTML
    const plainTextResponse = marked(result.response.text());
    const textOnlyResponse = plainTextResponse.replace(/<[^>]*>/g, "");

    return textOnlyResponse; // Pastikan format respons benar
  } catch (error) {
    console.error("Error calling Google Generative AI API:", error);
    return "Maaf, saya mengalami kesalahan dalam merespons.";
  }
};
