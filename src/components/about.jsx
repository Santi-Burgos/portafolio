import profilePic from '../assets/images/profile.jpg';
import Interests from '../ui/skill.jsx';

function About(){
   return(
    <div className="about-me-content">
        <div className="about-details">
            <div className='container-image-text'>
                <img src={profilePic} alt="Profile-Picture" />
            </div>
            <div className="about-text">
                <p>
                    Desarrollador web junior con orientación al backend y formación práctica en desarrollo con JavaScript, 
                    principalmente utilizando Node.js y Express. He trabajado en proyectos personales, lo que me ha permitido fortalecer mis habilidades en diseño y desarrollo.
                    Tengo conocimientos de frontend y me interesa seguir creciendo en entornos donde pueda aportar en la construcción de soluciones escalables.
                </p>
            </div>
        </div>
        <Interests/>
    </div>
    )
}
export default About