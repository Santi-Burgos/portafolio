import ContactButton from "../ui/ContactButton.jsx";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";

function Presentation() {
  return (
    <div className="presentation-container">
      <div className="presentation-aura"></div>

      <div className="presentation-content">
        <div className="profile-header">
          <h1 className="hero-name animate-reveal">
            Burgos <span className="highlight">Santiago</span>
          </h1>
          <div className="role-container animate-reveal-delayed">
            <h2 className="hero-role">
              Backend Developer
            </h2>
            <div className="role-underscore"></div>
          </div>
        </div>
        <div className="professional-status animate-pop-in">
          <GoCheckCircle className="status-icon" />
          <span>Disponible para nuevos desafíos</span>
        </div>
        <div className="presentation-actions animate-fade-in">
          <div className="buttons-stack">
            <a
              href="/SantiagoBurgos-2026-cv.pdf"
              className="cv-download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoCloudDownloadOutline className="btn-icon" />
              <span>Descargar CV</span>
            </a>
            
            <div className="social-links-row">
              <ContactButton
                icon={BiLogoGmail}
                email="santiburgos38@gmail.com"
                name="Email"
                className="social-btn"
                showText={false}
              />
              <ContactButton
                icon={FaLinkedin}
                link="https://www.linkedin.com/in/santiago-burgos-914215246/"
                name="LinkedIn"
                className="social-btn"
                showText={false}
              />
              <ContactButton
                icon={FaGithub}
                link="https://github.com/Santi-Burgos"
                name="GitHub"
                className="social-btn"
                showText={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
