import { useState } from "react";

export default function InputArea({ onSend, isLoading }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask anything..."
        className="flex-1 p-3 rounded-l-2xl border focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
        disabled={isLoading}
      />
      <button
        type="submit"
        className={`bg-blue-500 text-white px-6 rounded-r-2xl ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "..." : "Send"}
      </button>
    </form>
  );
}
