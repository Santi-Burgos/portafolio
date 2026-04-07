import profilePic from '../assets/images/profile.webp';
import Interests from '../ui/Interests.jsx';

function About() {
  return (
    <div className="about-me-content">
      <div className="about-main">
        <div className="about-image-container">
          <img src={profilePic} alt="Santiago Burgos - Foto de perfil" className="profile-img-enhanced" />
          <div className="image-border-glow"></div>
        </div>
        
        <div className="about-description">
          <div className="about-text-card">
            <p>
              Desarrollador backend, con experiencia práctica en el desarrollo de aplicaciones utilizando <span>JavaScript</span>, <span>Node.js</span> y <span>Nestjs</span>.
            </p>
            <p>
              He trabajado en proyectos reales, participando en el diseño de APIs, optimización de rendimiento y mejora de arquitectura.
              Cuento con conocimientos de frontend que me permiten tener una visión integral del producto.
            </p>
            <p>
              Me interesa seguir creciendo en entornos donde pueda aportar en la construcción de soluciones escalables y mantenibles.
            </p>
          </div>
        </div>
      </div>
      
      <div className="about-interests-wrapper">
        <Interests />
      </div>
    </div>
  );
}

export default About;