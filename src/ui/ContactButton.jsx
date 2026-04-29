import { useState } from "react";

const ContactButton = ({ icon: Icon, link, email, name, className = "", showText = true }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e) => {
    if (email) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Error copiando al portapapeles:", err);
      }
    }
  };

  return (
    <a
      href={link || "#"}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className={`contact-button ${className} ${!showText ? 'icon-only' : ''} ${copied ? 'is-copied' : ''}`}
      aria-label={name}
      data-tooltip={!showText ? name : undefined}
      onClick={handleClick}
    >
      <span className="contact-icon"><Icon /></span>
      {showText && name && <span className="contact-name">{name}</span>}
      {copied && <span className="copied-msg"> ¡Copiado! </span>}
    </a>
  );
};

export default ContactButton;
