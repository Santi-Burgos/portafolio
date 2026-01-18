import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    loadSecondaryFonts();
  });
} else {
  setTimeout(loadSecondaryFonts, 0);
}

function loadSecondaryFonts() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Geist:wght@500;800&display=swap';
  document.head.appendChild(link);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
