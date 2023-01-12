import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Components.js/Home.js'
import About from './Components.js/About.js'
import Services from './Components.js/Services.js'


export default function App() {
  return (
        <Router>
            <nav>
              <Link to="/" style={ {padding: 5} } >
                Home
              </Link>
              <Link to="/About" style={{padding: 5}}>
                About
              </Link>
              <Link to= "/Services" style={{padding: 5}}>
                Services
              </Link>
            </nav>

            <Routes>
                <Route path="/" element= <Home/> />
                <Route path="/About" element = <About/>/>
                <Route path="/Services" element=<Services/> />
            </Routes>
         
        </Router>

 
  );
}