import apiEcommerce from '../assets/images/apiecommerce.webp';
import projectChat from '../assets/images/chatgrupal.webp';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMysql, SiPostgresql } from "react-icons/si";

export const projectsData = [
  {
    link: "https://github.com/Santi-Burgos/EcommerceAPI",
    name: "Ecommerce-API",
    description: "API para e-commerce en desarrollo. Permite gestionar productos, controlar el stock, cargar imágenes y procesar pagos mediante la integración con la API de Mercado Pago. Incluye autenticación basada en tokens JWT.",
    img: apiEcommerce,
    alt: "Foto del proyecto Ecommerce API",
    stack: [SiExpress, SiMysql, FaNodeJs],
    linkDeploy: ""
  },
  {
    link: "https://github.com/Santi-Burgos/group-projec",
    name: "Chat Grupal",
    description: "Aplicación web permite crear grupos, invitar usuarios y mantener conversaciones dentro de cada grupo. Incluye autenticación con tokens JWT, sistema de invitaciones, y mensajería instantánea implementada con WebSockets.",
    img: projectChat,
    alt: "Foto del proyecto Chat Grupal",
    linkFront: "https://github.com/Santi-Burgos/group-project-frontend",
    stack: [FaReact, SiExpress, SiPostgresql, FaNodeJs],
    linkDeploy: "http://chatgrupal.netlify.app/"
  }
];
