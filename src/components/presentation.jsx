import ContactButton from "../ui/contactButton.jsx";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import { IoCloudDownloadOutline } from "react-icons/io5";



function Presentation() {
  return (
    <div className="precontenedor-profile">      
        <div className="container-profile">
          <div className="profile-text">
            <h1 className="gradient-text">Burgos <span className="block-name">Santiago</span></h1>
            <h2 className="gradient-text">FullStack developer</h2>
          </div>  
          <div className="buttons-container">
            <ContactButton icon={FaLinkedin} link=""  />
            <ContactButton icon={FaGithub} link="https://github.com/Santi-Burgos" />
            <ContactButton icon={FaFileDownload} link=""  />
          </div>
        <div className="button-view-projects">
              <div className="status-buttons">
                <div className="available-box">
                  <GoCheckCircle className="icon available-icon" />
                  <span className="available-text">Disponible</span>
                </div>
                <a
                  href="/cv.pdf"
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
