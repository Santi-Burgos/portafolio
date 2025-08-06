import ContactButton from "../ui/contactButton.jsx";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

import profilePic from '../assets/images/profile.jpg';



function Presentation() {
  return (
    <div>
        <div className="profile">  
          <img src={profilePic} alt="Profile-Picture" />
        <div className="profile-text">
            <p>Santiago Burgos</p>
            <p>Backend developer</p>
        </div>
        </div>        
        <div className="buttons-section">
            <ContactButton icon={FaLinkedin} link="" name={"Linkedin"} />
            <ContactButton icon={FaGithub} link="https://github.com/Santi-Burgos" name={"Github"} />
            <ContactButton icon={FaFileDownload} link="" name={"Download resume"} />
        </div>
    </div>
  );
}

export default Presentation;
