import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";


function NavBar({ open, toggleNav }) {
  return (
    <div className={`App-header ${open ? "open-header" : ""}`}>
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleNav}>
          {open ? <IoCloseCircleOutline /> : <GiHamburgerMenu />}
        </button>

        <ul className={`menu ${open ? "open" : ""}`}>
          <li><a href="#contact">Contacto</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
