import { useState, useEffect } from "react";
import { generateResponse } from "../services/gemini";

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);

  // Load history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem("geminiChatHistory");
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory);
        setChatHistory(Array.isArray(parsedHistory) ? parsedHistory : []);
      } catch {
        setChatHistory([]);
      }
    }
  }, []);

  // Save history to localStorage
  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem("geminiChatHistory", JSON.stringify(chatHistory));
    } else {
      localStorage.removeItem("geminiChatHistory");
    }
  }, [chatHistory]);

  const startNewChat = () => {
    setCurrentChatId(null);
    setMessages([]);
  };

  const sendMessage = async (text) => {
    setIsLoading(true);
    const userMessage = { text, sender: "user" };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    try {
      const aiText = await generateResponse(text);
      const aiMessage = { text: aiText, sender: "ai" };
      const finalMessages = [...newMessages, aiMessage];
      setMessages(finalMessages);

      if (currentChatId === null) {
        const newChat = {
          id: Date.now(),
          title: text.slice(0, 30) + (text.length > 30 ? "..." : ""),
          messages: finalMessages,
          createdAt: new Date().toISOString(),
        };
        setChatHistory((prev) => [newChat, ...prev]);
        setCurrentChatId(newChat.id);
      } else {
        setChatHistory((prev) =>
          prev.map((chat) =>
            chat.id === currentChatId
              ? { ...chat, messages: finalMessages }
              : chat
          )
        );
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: `Error: ${error.message}`,
          sender: "ai",
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const loadChat = (index) => {
    const chat = chatHistory[index];
    setMessages(chat.messages);
    setCurrentChatId(chat.id);
  };

  const deleteChat = (index) => {
    const isCurrent = chatHistory[index]?.id === currentChatId;
    setChatHistory((prev) => prev.filter((_, i) => i !== index));
    if (isCurrent) startNewChat();
  };

  const clearAllChats = () => {
    if (window.confirm("Are you sure you want to delete all chat history?")) {
      setChatHistory([]);
      startNewChat();
    }
  };

  return {
    messages,
    isLoading,
    sendMessage,
    chatHistory,
    startNewChat,
    loadChat,
    deleteChat,
    clearAllChats,
    currentChatId,
  };
}
