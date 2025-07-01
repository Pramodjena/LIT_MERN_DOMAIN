export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of the project and what it does.",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of the project and what it does.",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of the project and what it does.",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href="#" className="text-blue-600 hover:underline">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
