import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Reader's haven",
      description:
        "A book reading app desined for th eusers in which the users can read, add, updates book, and books are recommended to them based on there older reads.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Next",
        "Postgres",
        "Prisma",
        "Jest",
        "React testing library",
      ],
      liveLink: "https://readershaven.demo",
      githubLink: "https://github.com/username/chatgpt-clone",
      stats: {
        stars: 120,
        forks: 45,
      },
    },
    {
      title: "Porto",
      description:
        "A chrome extension that lets you port all your tweets from twitter to bluesky",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Tailwind CSS", "vite bundler"],
      liveLink: "https://ecommerce-dashboard.demo",
      githubLink: "https://github.com/username/ecommerce-dashboard",
      stats: {
        stars: 85,
        forks: 32,
      },
    },
    {
      title: "Lopho abroad",
      description:
        "A website for consultancy services for students who want to study abroad",
      image: "/api/placeholder/600/400",
      technologies: ["Next", "Express.js", "PostgreSQL", "TypeORM", "Docker"],
      liveLink: "https://task-api.demo",
      githubLink: "https://github.com/username/task-api",
      stats: {
        stars: 64,
        forks: 28,
      },
    },
  ];

  return (
    <div
      data-testid="projects"
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Some of my recent work and side projects
          </p>
          <div className="mt-4 h-1 w-24 bg-blue-500 mx-auto rounded"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-testid={`project-${index}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-semibold text-gray-900 mb-2"
                  data-testid={`project-title-${index}`}
                >
                  {project.title}
                </h3>
                <p
                  className="text-gray-600 mb-4"
                  data-testid={`project-description-${index}`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div
                  className="flex flex-wrap gap-2 mb-4"
                  data-testid={`project-tech-${index}`}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    <span data-testid={`project-stars-${index}`}>
                      {project.stats.stars}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />
                    <span data-testid={`project-forks-${index}`}>
                      {project.stats.forks}
                    </span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900"
                    data-testid={`project-github-${index}`}
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900"
                    data-testid={`project-live-${index}`}
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
