import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components.js/Home';
import './App.css';
import Animal from './components.js/Animal';
import Emotional from './components.js/Emotional';
import Family from './components.js/Family';


function App() {



return (
    <Router>
        <nav className='nav-box'>
          <Link to="/" >
            Home
          </Link>
          <Link to="/Animal" >
          Animal-Lover
          </Link>
          <Link to="/Emotional">
          Emotional-Support
          </Link>
          <Link to="/Family">
          Family-Oriented
          </Link>

        </nav>
     <Routes>

      <Route path="/" element=<Home/> />
      <Route path="/Animal" element=<Animal/> />
      <Route path="/Emotional" element=<Emotional/> />
      <Route path="/Family" element=<Family/> />

     </Routes>
   
    </Router>
  );
}

export default App;
