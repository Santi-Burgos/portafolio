import apiEcommerce from '../assets/images/apiecommerce.webp';
import projectChat from '../assets/images/chatgrupalnew.webp';
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiExpress, SiMysql, SiPostgresql } from "react-icons/si";
import javaProject from '../assets/images/javaproject.webp'

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
  },
  {
    link: "https://github.com/Santi-Burgos/projectDates",
    name: "Gestor de citas - en proceso",
    description: "API desarrollada en Java vanilla diseñada para gestionar alta concurrencia en sistemas de turnos masivos. Implementa Clean Architecture y un sistema de bloqueo distribuido con Redis, garantizando la integridad de datos mediante transaccionalidad en PostgreSQL para evitar el overbooking.",
    img: javaProject,
    alt: "Foto del gestor de citas",
    stack: [FaJava, SiPostgresql],
  }
];
