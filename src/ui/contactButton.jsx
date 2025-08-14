const ContactButton = ({ icon: Icon, link, name }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-button"
    >
      <span className="contact-icon"><Icon /></span>

    </a>
  );
};
export default ContactButton;