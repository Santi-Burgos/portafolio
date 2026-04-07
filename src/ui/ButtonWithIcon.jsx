const ButtonWithIcon = ({ icon: Icon, link }) => {
  return (
    <button>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Icon />
      </a>
    </button>
  );
};

export default ButtonWithIcon;