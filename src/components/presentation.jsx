import ContactButton from "../ui/contactButton.jsx";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

import profilePic from '../assets/images/profile.jpg';



function Presentation() {
  return (
    <div className="precontenedor-profile">
        <div className="profile">  
          <div className="container-image">
            <div className="border-image">
              <img src={profilePic} alt="Profile-Picture" />
            </div>
          </div>
        <div className="profile-text">
            <h1 className="gradient-text">Santiago Burgos</h1>
            <h2 className="gradient-text">Backend developer</h2>
        </div>
        </div>        
        <div className="buttons-section">
          <div className="buttons-container">
            <ContactButton icon={FaLinkedin} link=""  />
            <ContactButton icon={FaGithub} link="https://github.com/Santi-Burgos" />
            <ContactButton icon={FaFileDownload} link=""  />
          </div>
          <div className="button-view-projects">
            <button>
              <a href="#projects"><p>Ver Proyectos</p><GoProjectSymlink/></a>
            </button>
          </div>
        </div>
    </div>
  );
}

export default Presentation;
