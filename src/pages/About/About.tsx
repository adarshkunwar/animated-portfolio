const About = () => {
  return (
    <div
      data-testid="about"
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About Me
          </h2>
          <div className="mt-4 h-1 w-24 bg-blue-500 mx-auto rounded"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg bg-gray-200 overflow-hidden">
              <img
                src="https://placehold.co/400x500"
                alt="Profile"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Full Stack Developer & UI/UX Enthusiast
            </h3>
            <div className="space-y-4 text-gray-600">
              <p data-testid="bio-intro">
                Hi! I'm a passionate developer with 3+ years of experience in
                creating modern web applications. I specialize in React,
                Node.js, and cloud technologies.
              </p>
              <p data-testid="bio-detail">
                My journey in tech started with a curiosity about how things
                work on the web. Today, I'm dedicated to building user-centric
                applications that solve real-world problems while maintaining
                clean, efficient code.
              </p>
              <p data-testid="bio-interests">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical writing.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-3" data-testid="skills-list">
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "AWS",
                  "MongoDB",
                  "Docker",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
