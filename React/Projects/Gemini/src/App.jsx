import { useState } from "react";
import useChat from "./hooks/useChat";
import Message from "./components/Message";
import InputArea from "./components/InputArea";
import Header from "./components/Header";
import HistorySidebar from "./components/HistorySidebar";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    messages,
    isLoading,
    sendMessage,
    chatHistory,
    startNewChat,
    loadChat,
    deleteChat,
    clearAllChats,
    currentChatId,
  } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        onNewChat={startNewChat}
      />

      <div className="flex flex-1 overflow-hidden">
        <HistorySidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          chatHistory={chatHistory}
          onSelectChat={(index) => {
            loadChat(index);
            setSidebarOpen(false);
          }}
          onDeleteChat={deleteChat}
          onClearAll={clearAllChats}
          currentChatId={currentChatId}
        />

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col p-4 overflow-hidden">
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-6 max-w-md">
                  <h2 className="text-xl font-semibold mb-2">
                    LIT Student AI Assistant
                  </h2>
                  <p className="text-gray-600">
                    Start a new chat or select one from your history
                  </p>
                </div>
              </div>
            ) : (
              messages.map((msg, index) => (
                <Message
                  key={index}
                  sender={msg.sender}
                  text={msg.text}
                  isError={msg.isError}
                />
              ))
            )}
          </div>

          <InputArea onSend={sendMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
