import {
  FaHistory,
  FaTimes,
  FaTrash,
  FaSearch,
  FaRegClock,
} from "react-icons/fa";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

export default function HistorySidebar({
  isOpen,
  onClose,
  chatHistory,
  onSelectChat,
  onDeleteChat,
  onClearAll,
  currentChatId,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHistory = chatHistory.filter(
    (chat) =>
      chat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.messages.some((msg) =>
        msg.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-72 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold flex items-center">
            <FaHistory className="mr-2 text-blue-500" />
            Chat History
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <FaTimes className="text-gray-500" />
          </button>
        </div>

        {/* Search */}
        <div className="p-3 border-b">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search chats..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {filteredHistory.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              {searchTerm ? "No matching chats" : "No history yet"}
            </div>
          ) : (
            <ul>
              {filteredHistory.map((chat, index) => (
                <li
                  key={chat.id}
                  className={`border-b hover:bg-gray-50 transition-colors ${
                    chat.id === currentChatId ? "bg-blue-50" : ""
                  }`}
                >
                  <button
                    onClick={() => onSelectChat(index)}
                    className="w-full text-left p-3 flex flex-col items-start"
                  >
                    <span className="font-medium truncate max-w-full">
                      {chat.title}
                    </span>
                    <span className="text-xs text-gray-500 mt-1 flex items-center">
                      <FaRegClock className="mr-1" />
                      {formatDistanceToNow(new Date(chat.createdAt), {
                        addSuffix: true,
                      })}
                    </span>
                  </button>
                  <div className="px-3 pb-2 flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteChat(index);
                      }}
                      className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50"
                      title="Delete chat"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t bg-gray-50">
          <button
            onClick={onClearAll}
            disabled={chatHistory.length === 0}
            className={`w-full py-2 px-4 rounded-lg flex items-center justify-center ${
              chatHistory.length === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-red-100 text-red-600 hover:bg-red-200"
            }`}
          >
            <FaTrash className="mr-2" />
            Clear All History
          </button>
        </div>
      </div>
    </>
  );
}
