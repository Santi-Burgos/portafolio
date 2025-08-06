import {IconType} from "react-icons"


const ProjectCard = ({icon: Icon, link, name, description, img, alt, stack, linkDeploy}) =>{
    return(
        <div className="projects">
            <div>
                <img src={img} alt={alt} />
                <div>
                    <p>{name}</p>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            <div>
                {stack}
            </div>
            <div>
                <button>
                    <a href={link}><Icon/></a>
                </button>
                 <button>
                    <a href={linkDeploy}></a>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard