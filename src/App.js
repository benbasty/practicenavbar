import './App.css';
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import HeaderImg from '../src/assets/header.jpg'

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="App">
      <header className="header">
        <nav>
          <h1><a href='/'>Logo</a></h1>
          <ul className= {click ? "nav-menu active" : "nav-menu"}>
            <li><a href='/'>Home</a></li>
            <li><a href='/about#about'>About</a></li>
            <li><a href='/project#project'>Projects</a></li>
            <li><a href='/contact#contact'>Contact</a></li>
          </ul>
          <div className='hamburger' onClick={handleClick}>
              {
                click ?
                (<FaTimes size={30}/>)
                :
                (<FaBars size={30}/>)
              }
          </div>
        </nav>
        <img src= {HeaderImg} alt='himg'/>
      </header>
      <About />
      <Project />
      <Contact />

    </div>
  );
}

export default App;
