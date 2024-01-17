import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import Resume from "../../assets/docs/_CV_Pranjeet_Kumar.pdf"
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import '../Home/Home.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const Home = () => {
  const[theme, setTheme] = useTheme()
  //handle theme

  const handleTheme = () =>{
    setTheme((prevState)=>(prevState === 'light' ? 'dark' : 'light'));
  }
  return (
    <>
      <div className='container-fluid home-container' id='home'>
        <div className='theme-btn' onClick={handleTheme}>
          {theme === 'light' ? (<FaRegMoon size={25}/>):(<IoSunnyOutline size={25}/>)}
        </div>
        <div className='container home-content'>
          <Fade right>
          <h2>Hi 👋 I'm Pranjeet Kumar a</h2>
          <h1>
            <Typewriter options={{
              strings: ['Full Stack Developer !', 'MERN Stack Developer !', 'Python Devloper !'],
              autoStart: true,
              loop: true,
            }}/>
          </h1>
         
          </Fade>
         
          <Zoom bottom>
          <div className='home-buttons'>
            <button className='btn btn-hire'>Hire Me</button>
            <a className='btn btn-cv' href={Resume} download="Pranjeet_Kumar(CV).pdf">My Resume</a>
          </div>
          </Zoom>
          
        </div>
      </div>
    </>
  )
}

export default Home