import ProjectCard from "../ui/ProjectCard.jsx";
import { projectsData } from "../data/projects.js";

function Projects() {
  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          link={project.link}
          name={project.name}
          description={project.description}
          img={project.img}
          alt={project.alt}
          stack={project.stack}
          linkFront={project.linkFront}
          linkDeploy={project.linkDeploy}
        />
      ))}
    </div>
  );
}

export default Projects;