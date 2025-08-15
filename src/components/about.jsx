import profilePic from '../assets/images/profile.jpg';
import Interests from '../ui/skill.jsx';

function About(){
   return(
    <div className="about-me-content">
        <div className="about-details">
            <div className='container-image'>
                <img src={profilePic} alt="Profile-Picture" />
            </div>
            <div className='container-rest'>
            <div className="about-text">
                <p>
                    Desarrollador web junior con orientación al backend y formación práctica en desarrollo con JavaScript, 
                    principalmente utilizando Node.js y Express. He trabajado en proyectos personales, lo que me ha permitido fortalecer mis habilidades en diseño y desarrollo de servidores.
                    Tengo conocimientos básicos de frontend y me interesa seguir creciendo en entornos donde pueda aportar en la construcción de soluciones escalables.
                </p>
            </div>
            <Interests/>
        </div>
        </div>
    </div>
    )
}
export default About