import Presentation from './components/Presentation.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Carousel from './ui/Carousel.jsx';
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import Experience from './components/Experience.jsx';
import { experiences } from './data/experience.js';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <main className="body-bg">
        <section className='presentation' id='presentation'>
          <Presentation />
          <div className="section-divider"></div>
        </section>
        
        <section className='projects-section' id='experience'>
            <div className='projects-presentation'>
              <h2 className='gradient-text'>
                <FaCode />
                <p>EXPERIENCIA</p>
              </h2>
            </div>
            <div className='experience-container'>
              {experiences.map((exp, index) => (
                <Experience key={index} experience={exp} />
              ))}
            </div>
            <div className="section-divider"></div>
        </section>

        <section className='projects-section' id='projects'>
          <div className='projects-presentation'>
            <h2 className="gradient-text"><FaCode /><p>PROYECTOS</p></h2>
          </div>
            <Projects />
          <div className="section-divider"></div>
        </section>

        <section className='stack-tech' id='stack'>
           <Carousel /> 
           <div className="section-divider"></div>
        </section>

        <section className='about-me' id='about'>
          <div className='projects-presentation'>
            <h2 className="gradient-text"><FaLaptopCode /><p>SOBRE MÍ</p></h2>
          </div>
          <div className='container-about'>
            <About />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
