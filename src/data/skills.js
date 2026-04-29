import {
  FaServer, FaCode, FaDatabase,
  FaReact, FaNodeJs, FaCss3Alt,
  FaGitAlt, FaGithub, FaTerminal, 
  FaStripe, FaLaptopCode
} from 'react-icons/fa';
import {
  SiNestjs, SiExpress, SiPostgresql, SiMysql,
  SiCouchbase, SiSupabase, SiSocketdotio, SiOpenai,
  SiPostman, SiJavascript,
  SiRedis, SiRender
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { CgVercel } from 'react-icons/cg';

export const skillsData = [
  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Java", icon: <FaJava /> }
    ]
  }, {
    title: "Base de Datos",
    icon: <FaDatabase />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "CouchDB", icon: <SiCouchbase /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Redis", icon: <SiRedis /> }
    ]
  },
  {
    title: "Frontend",
    icon: < FaLaptopCode/>,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ]
  },
  {
    title: "Herramientas",
    icon: <FaCode />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Terminal", icon: <FaTerminal /> }
    ]
  },
  {
    title: "Servicios",
    icon: <FaCode />,
    skills: [
      { name: "Socket.io", icon: <SiSocketdotio /> },
      { name: "Stripe", icon: <FaStripe /> },
      { name: "OpenAI", icon: <SiOpenai /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Vercel", icon: <CgVercel /> }
    ]
  }
];
