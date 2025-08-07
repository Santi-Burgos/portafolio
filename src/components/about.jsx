import profilePic from '../assets/images/profile.jpg';

function About(){
   return(
    <div className="">
        <div className="">
            <img src={profilePic} alt="Foto de perfil"/>
        </div>
        <div className="">
            <div className="about-text">
                <p>
                    Desarrollador web junior con orientación al backend y formación práctica en desarrollo con JavaScript, 
                    principalmente utilizando Node.js y Express. he trabajado en proyectos personales, lo que me han permitido fortalecer mis habilidades en diseño y desarrollo de servidores.
                    Tengo conocimientos básicos de frontend y me interesa seguir creciendo en entornos donde pueda aportar en la construcción de soluciones escalables
                </p>
            </div>
        </div>
    </div>
    )
}

export default About


