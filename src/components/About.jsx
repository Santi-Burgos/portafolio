import profilePic from '../assets/images/profile.webp';
import Interests from '../ui/Interests.jsx';

function About() {
  return (
    <div className="about-me-content">
      <div className="about-details">
        <div className='container-image-text'>
          <img src={profilePic} alt="Santiago Burgos - Foto de perfil" />
        </div>
        <div className="about-text">
          <p>
            Desarrollador backend, con experiencia práctica en el desarrollo de aplicaciones utilizando JavaScript, Node.js y Nestjs.
            He trabajado en proyectos reales, participando en el diseño de APIs, optimización de rendimiento y mejora de arquitectura.
            Cuento con conocimientos de frontend que me permiten tener una visión integral del producto.
            Me interesa seguir creciendo en entornos donde pueda aportar en la construcción de soluciones escalables y mantenibles.
          </p>
        </div>
      </div>
      <Interests />
    </div>
  );
}

export default About;