import React from 'react'
import "../About/About.css";
import pran_img from "../../assets/images/pran.jpg";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <>
    <Fade top>
    <div className='about' id='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                <img class="center" src={pran_img} alt='profile_pic'/>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                <h1>About Me</h1>
                <p>
                Hello! I'm Pranjeet Kumar, a passionate and dedicated technologist with a Bachelor's degree in Computer Science & Engineering through lateral entry. Currently pursuing my B.Tech at I.K. Gujral Punjab Technical University in Kapurthala, I have a solid foundation in various programming languages and technologies.
                My journey in technology began at Mehr Chand Polytechnic College, where I completed my PSBTE & IT (LEET) with an impressive 76.6%, This educational milestone not only laid a solid foundation but also served as a catalyst for the subsequent chapters of my professional endeavors.<br/>
                I have a solid understanding of core subjects including Data Structures and Algorithms, Database Management Systems, Object-Oriented Programming, Operating Systems, and Computer Networks.
                Eager to enhance my expertise continually, I have pursued certifications in React, Redux, Web Development, JavaScript, Python Programming, and Core Java. You can explore my work and insights on platforms like GitHub and LinkedIn, where I am open to collaborations, networking opportunities, and discussions on innovative tech projects. 
                </p>
            </div>
        </div>
    </div>
    </Fade>
    </>
  )
}

export default About