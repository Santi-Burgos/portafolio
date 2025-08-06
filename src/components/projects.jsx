import ProjectCard from "../ui/projectCard.jsx";
import { FaGithub } from "react-icons/fa";


function Projects(){
    return(
        <div>
            <ProjectCard 
               icon ={FaGithub}
               link =""
               name = ""
               description= ""
               img = ""
               alt = ""
               stack = ""
               linkDeploy=""
            />
        </div>
    )
}

export default Projects