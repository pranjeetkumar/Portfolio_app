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
          <h2>Hi 👋 I'm Pranjeet Kumar, a</h2>
          <h1>
            <Typewriter options={{
              strings: ['Python Developer !', 'Javascript Developer !', 'Java Developer !'],
              autoStart: true,
              loop: true,
            }}/>
          </h1>
         
          </Fade>
         
          <Zoom bottom>
          <div className='home-buttons'>
            {/* <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=+919501796843' rel='noreferrer' target='_blank'>Hire Me</a> */}
            <a className='btn btn-hire' href='https://wa.me/+919501796843' rel='noreferrer' target='_blank'>Hire Me</a>
            <a className='btn btn-cv' href={Resume} download="Pranjeet_Kumar(CV).pdf">Download CV</a>
          </div>
          </Zoom>
          
        </div>
      </div>
    </>
  )
}

export default Home