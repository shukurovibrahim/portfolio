import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './About';
import WorkSamplesPage from './MyWorks';
import ContactPage from './Contact';
import "./App.css"

function App() {
  const [activeLink, setActiveLink] = useState('');

  return (
    <Router>
      <div className='container'>
        <nav className='navbar'>
          <ul type="none" className='list'>
            <li>
              <Link to="/" 
                    className={activeLink === '/' ? 'nav-link active' : 'nav-link'}
                    onClick={() => setActiveLink('/')}>About Me</Link>
            </li>
            <li>
              <Link to="/work-samples" 
                    className={activeLink === '/work-samples' ? 'nav-link active' : 'nav-link'}
                    onClick={() => setActiveLink('/work-samples')}>My Works</Link>
            </li>
            <li>
              <Link to="/contact" 
                    className={activeLink === '/contact' ? 'nav-link active' : 'nav-link'}
                    onClick={() => setActiveLink('/contact')}>Contact Me</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={<AboutPage />} />
          <Route path="/work-samples" element={<WorkSamplesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;