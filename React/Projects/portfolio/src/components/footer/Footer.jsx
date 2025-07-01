export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-blue-400">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-400">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-400">
            GitHub
          </a>
          <a href="#" className="hover:text-blue-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
