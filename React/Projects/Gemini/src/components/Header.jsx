import { FaGraduationCap, FaBars, FaPlus } from "react-icons/fa";

export default function Header({ onMenuClick, onNewChat }) {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="mr-3 p-1 rounded-full hover:bg-gray-100"
        >
          <FaBars className="text-gray-600" />
        </button>
        <FaGraduationCap className="text-2xl text-blue-600 mr-2" />
        <h1 className="text-xl font-bold text-gray-800">
          LIT Student AI Assistant
        </h1>
      </div>
      <button
        onClick={onNewChat}
        className="p-2 rounded-full hover:bg-gray-100 text-blue-600"
        title="New Chat"
      >
        <FaPlus />
      </button>
    </header>
  );
}
