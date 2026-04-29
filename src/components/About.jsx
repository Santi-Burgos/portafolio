import profilePic from '../assets/images/profile.webp';
import Interests from '../ui/Interests.jsx';

function About() {
  return (
    <div className="about-me-content">
      <div className="about-main">
        <div className="about-image-container">
          <img src={profilePic} alt="Santiago Burgos - Foto de perfil" className="profile-img-enhanced" width="280" height="280" loading="lazy" />
          <div className="image-border-glow"></div>
        </div>
        
        <div className="about-description">
          <div className="about-text-card">
            <p>
               Santiago Burgos, desarrollador backend especializado en <span>Node.js</span>, <span>NestJS</span> y <span>Bases de datos</span>.
            </p>
            <p>
              Me enfoco en construir APIs claras, optimizar performance y diseñar sistemas desacoplados que escalen sin volverse inmantenibles.
              Con conocimientos de frontend para entender el producto completo, no solo el backend.
            </p>
            <p>
              Busco sumarme a un equipo con desafíos que me impulsen a crecer y construir soluciones con impacto real.
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