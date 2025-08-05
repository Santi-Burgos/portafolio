import ContactButton from "../ui/contactButton.jsx";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import profilePic from '../assets/images/profile.jpg';



function Presentation() {
  return (
    <div>
        <div className="profile">  
          <img src={profilePic} alt="Profile-Pic" />
        <div>
            <p>Santiago Burgos</p>
          </div>        
        </div>
        
        <div>
            <ContactButton icon={FaLinkedin} link="" name={"Linkedin"} />
            <ContactButton icon={FaGithub} link="https://github.com/Santi-Burgos" name={"Github"} />
        </div>
    </div>
  );
}

export default Presentation;
