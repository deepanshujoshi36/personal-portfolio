function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio made using React.",
      github: "https://github.com/deepanshujoshi36/personal-portfolio",
      live: "https://personal-portfolio-two-chi-28.vercel.app/#home",
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
