import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ icon: Icon, link, name, description, img, alt, stack, linkFront, linkDeploy }) => {
  return (
    <div className="projects-card">
      <div className="container-image-card">
        <img src={img} alt={alt} loading="lazy" width="340" height="180" />
      </div>
      <div className="body-card">
        <div className="container-title-card">
          <h3>{name}</h3>
        </div>
        <div className="subtext-container">
          <p>{description}</p>
        </div>
        <div className="tech-stack">
          <ul>
            {stack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <li key={index} data-tooltip={tech.name} aria-label={tech.name}>
                  <IconComponent aria-hidden="true" />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="buttons-links">
          <a href={link} className="project-btn" target="_blank" rel="noopener noreferrer">
            <span>Backend</span><FaGithub aria-hidden="true" />
          </a>
          {linkFront && (
            <a href={linkFront} className="project-btn" target="_blank" rel="noopener noreferrer">
              <span>Frontend</span><FaGithub aria-hidden="true" />
            </a>
          )}
          {linkDeploy && (
            <a href={linkDeploy} className="project-btn demo" target="_blank" rel="noopener noreferrer">
              <span>Demo</span><FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
