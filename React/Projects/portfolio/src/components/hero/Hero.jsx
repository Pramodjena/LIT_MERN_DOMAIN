export default function Hero() {
  return (
    <section id="home" className="py-20 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-xl mb-8">I'm a web developer passionate about creating beautiful websites.</p>
        <a href="#projects" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100">
          View My Work
        </a>
      </div>
    </section>
  );
}