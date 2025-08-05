import { useState } from 'react';
import NavBar from './components/navbar.jsx';
import './styles/App.css';
import Presentation from './components/presentation.jsx';

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar open={openNav} toggleNav={() => setOpenNav(!openNav)} />
      </header>
      <main className="body-bg">
        <section className='presentation'>
          <Presentation />
        </section>
      </main>
    </div>
  );
}

export default App;
