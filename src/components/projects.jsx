import ProjectCard from "../ui/projectCard.jsx";
import apiEcommerce from '../assets/images/apiecommerce.jfif';
import projectChat from '../assets/images/chatgrupal.jfif';
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";


function Projects(){
    return(
        <div className="projects-container">
            <ProjectCard 
               link ="https://github.com/Santi-Burgos/EcommerceAPI"
               name = "Ecommerce-API"
               description= "API para e-commerce en desarrollo. Permite gestionar productos, controlar el stock, cargar imágenes y procesar pagos mediante la integración con la API de Mercado Pago. Incluye autenticación basada en tokens JWT."
               img ={apiEcommerce}
               alt = "Imagen API ecommerce"
               stack = {[
                    SiExpress, 
                    SiMysql,
                    FaNodeJs
                ]}
               linkDeploy=""
            />
            <ProjectCard 
               link ="https://github.com/Santi-Burgos/group-projec"
               name = "Chat Grupal"
               description= "Aplicación web permite crear grupos, invitar usuarios y mantener conversaciones dentro de cada grupo. Incluye autenticación con tokens JWT, sistema de invitaciones, y mensajería instantánea implementada con WebSockets."
               img ={projectChat}
               alt = "Imagen chatgrupal"
               linkFront="https://github.com/Santi-Burgos/group-project-frontend"
               stack = {[
                    FaReact,
                    SiExpress,
                    SiPostgresql,
                    FaNodeJs
               ]} 
               linkDeploy="http://chatgrupal.netlify.app/"
            />
        </div>
    )
}

export default Projects