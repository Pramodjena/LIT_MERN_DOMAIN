import { FaUser, FaRobot } from "react-icons/fa";

export default function Message({ sender, text, isError }) {
  return (
    <div
      className={`flex ${
        sender === "user" ? "justify-end" : "justify-start"
      } mb-4`}
    >
      <div
        className={`flex items-start max-w-3/4 ${
          sender === "user" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="mx-2 mt-1">
          {sender === "user" ? (
            <FaUser className="text-blue-500" />
          ) : (
            <FaRobot className={isError ? "text-red-500" : "text-green-500"} />
          )}
        </div>
        <div
          className={`p-3 rounded-2xl ${
            sender === "user"
              ? "bg-blue-100 rounded-br-none"
              : isError
              ? "bg-red-100 rounded-bl-none"
              : "bg-gray-100 rounded-bl-none"
          }`}
        >
          <p className={isError ? "text-red-800" : "text-gray-800"}>{text}</p>
        </div>
      </div>
    </div>
  );
}
