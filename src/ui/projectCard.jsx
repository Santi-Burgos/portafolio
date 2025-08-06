import { IconType } from "react-icons";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ icon: Icon,link, name, description, img, alt, stack, linkDeploy }) => {
  return (
    <div className="projects-card">
      <div className="body-card">
        <div className="container-image-card">
          <img src={img} alt={alt} />
        </div>
        <p>{name}</p>
        <div className="subtext-container">
          <p>{description}</p>
        </div>
        <div className="tech-stack">
            {stack.map((Icon, index) => (
                <Icon key={index} />
            ))}
        </div>
        <div className="buttons-links">
          <button>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Code <FaGithub/> 
            </a>
          </button>
          {linkDeploy && (
            <button>
              <a href={linkDeploy} target="_blank" rel="noopener noreferrer">
                Demo<FaArrowUpRightFromSquare />
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
