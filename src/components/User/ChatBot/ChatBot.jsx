import React, { useState } from "react";
import NavbarHome from "../Layout/NavbarHome";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked";

// API Key langsung dalam file
const apiKey = "AIzaSyC36rN9xTqXajI052P7TDMEF0NuqH9Nid4"; // Ganti dengan API key Anda
const genAI = new GoogleGenerativeAI(apiKey);

const generateContent = async (prompt) => {
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

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Selamat datang! Saya chatbot yang siap membantu Anda.",
    },
    {
      sender: "bot",
      text: "Bagaimana saya dapat membantu Anda hari ini?",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    const botResponse = await generateContent(userInput);
    setMessages([...newMessages, { sender: "bot", text: botResponse }]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>
      <div className="flex flex-col min-h-screen bg-green-100 p-6">
        <div
          className="bg-white rounded-lg shadow-lg p-4 mx-auto flex flex-col"
          style={{
            width: "1101px",
            height: "700px",
            top: "96px",
            left: "206px",
            borderRadius: "16px 0px 0px 0px",
            opacity: 1,
          }}
        >
          <h1 className="text-3xl font-bold text-green-700 mb-6 text-left">
            Chatbot
          </h1>
          <div
            className="flex flex-col gap-4 overflow-y-auto mb-4 p-6 border rounded-lg bg-gray-50"
            style={{ height: "calc(100% - 150px)" }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <img
                    src="/img/Chatbot1.jpeg" // Ganti dengan URL gambar bot
                    alt="Bot Avatar"
                    className="w-13 h-10 rounded-full"
                  />
                )}

                <div
                  className={`relative rounded-lg p-4 max-w-lg text-sm bg-white ${
                    msg.sender === "user"
                      ? "border border-gray-300"
                      : "border border-gray-300"
                  }`}
                  style={{
                    borderLeft: msg.sender === "bot" ? "4px solid #16a34a" : "",
                    borderRight:
                      msg.sender === "user" ? "4px solid #16a34a" : "",
                  }}
                >
                  {msg.text}
                </div>

                {msg.sender === "user" && (
                  <img
                    src="/img/chatbot2.png" // Ganti dengan URL gambar user
                    alt="User Avatar"
                    className="w-13 h-10 rounded-full"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Tulis pesan anda disini"
              className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
