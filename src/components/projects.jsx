import ProjectCard from "../ui/projectCard.jsx";
import profilePic from '../assets/images/profile.jpg';
import projectChat from '../assets/images/chatgrupal.jpg';
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";



function Projects(){
    return(
        <div className="projects-container">
            <ProjectCard 
               link ="https://github.com/Santi-Burgos/EcommerceAPI"
               name = "Ecommerce-API"
               description= "Api para ecommerce en desarrollo, gestion de productos y pago con Mercado Pago API"
               img ={profilePic}
               alt = "Imagen del proyecto"
               stack = {[FaReact, SiExpress]}
               linkDeploy=""
            />
            <ProjectCard 
               link ="https://github.com/Santi-Burgos/EcommerceAPI"
               name = "Chat Grupal"
               description= "App para generar grupo, enviar mensajes en tiempo real"
               img ={projectChat}
               alt = "Imagen del proyecto"
               stack = {FaReact} 
               linkDeploy="http://chatgrupal.netlify.app/"
            />
        </div>
    )
}

export default Projects