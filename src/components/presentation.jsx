import ContactButton from "../ui/contactButton.jsx";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";



function Presentation() {
  return (
    <div className="precontenedor-profile">      
        <div className="container-profile">
          <div className="profile-text">
            <h1 className="gradient-text">Burgos <span className="block-name">Santiago</span></h1>
            <h2 className="gradient-text">Software developer</h2>
          </div>  
          <div className="buttons-container">
            <ContactButton icon={FaLinkedin} link="https://www.linkedin.com/in/santiago-burgos-914215246/"  />
            <ContactButton icon={FaGithub} link="https://github.com/Santi-Burgos" />
            <ContactButton icon={BiLogoGmail} email="santiburgos38@gmail.com"  />
          </div>
        <div className="button-view-projects">
              <div className="status-buttons">
                <div className="available-box">
                  <GoCheckCircle className="icon available-icon" />
                  <span className="available-text">Disponible</span>
                </div>
                <a
                  href="/Santiago-BurgosCV.pdf"
                  className="download-box"
                  target="_blank"
                  rel="noopener noreferrer" 
                >
                  <IoCloudDownloadOutline className="icon download-icon" />
                  <span className="download-text">Descargar CV</span>
                </a>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Presentation;
