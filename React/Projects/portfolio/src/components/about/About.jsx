export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <img
              src="https://avatars.githubusercontent.com/u/103576706?s=400&u=4b851b04d278ddc08aa1f6a10ccf949ad9be9fa2&v=4"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-4">
              Hello! I'm a web developer with experience in building responsive
              and user-friendly websites.
            </p>
            <p className="text-lg mb-4">
              I specialize in front-end development using modern technologies
              like HTML, CSS, and JavaScript.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-3 py-1 rounded-full">HTML</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">CSS</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">
                  JavaScript
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">
                  Tailwind CSS
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">Node</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
