import { IconType } from "react-icons";

const ContactButton = ({ icon: Icon, link, name }) => {
  return (
    <button className="contact-button">
      <a href={link} target="_blank" rel="noopener noreferrer">
       {name}<Icon />
      </a>
    </button>
  );
};

export default ContactButton;

