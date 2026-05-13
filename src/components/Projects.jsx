function Projects() {
  const projectData = [
    {
      title: "Firewall Project",
      description: "Network security based firewall system.",
      github: "https://github.com/",
      live: "https://example.com",
    },

    {
      title: "Portfolio Website",
      description: "Personal portfolio made using React.",
      github: "https://github.com/",
      live: "https://example.com",
    },

    {
      title: "Weather App",
      description: "Weather checking app using API.",
      github: "https://github.com/",
      live: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>

      <div className="project-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-links">
              <a href={project.github}>GitHub</a>
              <a href={project.live}>Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
