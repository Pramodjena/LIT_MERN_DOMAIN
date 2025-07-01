export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">My Portfolio</h1>
        <div className="flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
