import ContactButton from "../ui/contactButton.jsx";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import profilePic from '../assets/images/profile.jpg';



function Presentation() {
  return (
    <div className="precontenedor-profile">
        <div className="profile">  
          <img src={profilePic} alt="Profile-Picture" />
        <div className="profile-text">
            <p>Santiago Burgos</p>
            <p>Backend developer</p>
        </div>
        </div>        
        <div className="buttons-section">
            <ContactButton icon={FaLinkedin} link=""  />
            <ContactButton icon={FaGithub} link="https://github.com/Santi-Burgos" />
            <ContactButton icon={FaFileDownload} link=""  />
            <div className="button-view-projects">
              <button>
                <a href="#projects">Ver Proyectos</a>
              </button>
            </div>
        </div>
    </div>
  );
}

export default Presentation;
