import { useState } from 'react';
import NavBar from './components/navbar.jsx';
import Presentation from './components/presentation.jsx';
import  Projects from './components/projects.jsx'
import './styles/App.css';

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="App">
      <main className="body-bg">
        <section className='presentation'>
          <div className='App-header'>
            <NavBar open={openNav} toggleNav={() => setOpenNav(!openNav)} />
          </div>
          <Presentation />
        </section>
        <section className='projects-section' id='projects'>  
          <Projects />
        </section>
        <section className='stack-tech' id='stack'>

        </section>
      </main>
    </div>
  );
}

export default App;
