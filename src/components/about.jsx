import profilePic from '../assets/images/profile.jpg';
import Interests from '../ui/skill.jsx';

function About(){
   return(
    <div className="">
        <div className='container-image'>
            <div className="border-image">
                <img src={profilePic} alt="Profile-Picture" />
            </div>
        </div>
        <div className="about-footer">
            <div className="about-text">
                <p>
                    Desarrollador web junior con orientación al backend y formación práctica en desarrollo con JavaScript, 
                    principalmente utilizando Node.js y Express. he trabajado en proyectos personales, lo que me han permitido fortalecer mis habilidades en diseño y desarrollo de servidores.
                    Tengo conocimientos básicos de frontend y me interesa seguir creciendo en entornos donde pueda aportar en la construcción de soluciones escalables
                </p>
            </div>
            <Interests/>
        </div>
    </div>
    )
}

export default About


