import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";


function NavBar({ open, toggleNav }) {
  return (
    <nav className="navbar">
        <button className="menu-toggle" onClick={toggleNav}>
            {open ? 
                <IoCloseCircleOutline />
                : 
                <GiHamburgerMenu />
            }
        </button>   

        {open && (
            <ul className="menu">
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#contact">Contacto</a></li>
            </ul>
            )}
    </nav>
  );
}

export default NavBar;
