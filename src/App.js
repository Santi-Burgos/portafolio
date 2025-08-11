import { useState } from 'react';
import NavBar from './components/navbar.jsx';
import Presentation from './components/presentation.jsx';
import  Projects from './components/projects.jsx'
import About from './components/about.jsx';
import Carousel from './ui/carrousel.jsx'
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

import './styles/App.css';

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="App">
      <main className="body-bg">
        <section className='presentation' id='presentation'>
          <div className='App-header'>
            <NavBar open={openNav} toggleNav={() => setOpenNav(!openNav)} />
          </div>
          <Presentation />
          <div className="section-divider"></div>
        </section>
        <section className='projects-section' id='projects'>
          <div className='projects-presentation'>
            <h2><FaCode/><p>PROYECTOS</p></h2>
          </div>
          <Projects />
           <div className="section-divider"></div>
        </section>
        <section className='stack-tech' id='stack'>
          <Carousel />
        </section>
        <section className='about-me' id='about'>
          <div className='projects-presentation'>
            <h2><FaLaptopCode/><p>SOBRE MÍ</p></h2>
          </div>
          <About />
        </section>
      </main>
    </div>
  );
}

export default App;
