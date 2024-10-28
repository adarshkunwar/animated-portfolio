import React from "react";

const Projects = () => {
  const projectList = [
    { title: "Project 1", description: "Description of project 1." },
    { title: "Project 2", description: "Description of project 2." },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div>
        {projectList.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
