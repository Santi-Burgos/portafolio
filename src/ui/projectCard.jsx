import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ icon: Icon,link, name, description, img, alt, stack, linkDeploy}) => {
  return (
    <div className="projects-card">
      <div className="body-card">
        <div className="container-image-card">
          <img src={img} alt={alt} />
        </div>
        <div className="container-title-card">
          <p>{name}</p>
        </div>
        <div className="subtext-container">
          <p>{description}</p>
        </div>
        <div className="tech-stack">
            <ul>
            {stack.map((Icon, index) => (
                <li key={index}>
                    <Icon key={index} /> 
                </li>
            ))}
            </ul>
        </div>
        <div className="buttons-links">
          <button>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <p>Code</p><FaGithub/> 
            </a>
          </button>
          {linkDeploy && (
            <button>
              <a href={linkDeploy} target="_blank" rel="noopener noreferrer">
                <p>Demo</p><FaArrowUpRightFromSquare />
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
