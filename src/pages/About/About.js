import React from 'react'
import "../About/About.css"

const About = () => {
  return (
    <>
    <div className='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                <img src='./pran.jpg' alt='profile_pic'/>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                <h1>About Me</h1>
                <p>
                Hobbies play a crucial role in shaping our personalities, providing an avenue for self-expression, relaxation, and personal growth. They offer a refuge from the demands of daily life and allow individuals to immerse themselves in activities that bring joy and fulfillment. Personally, my hobbies serve as an indispensable part of my life, offering a diverse range of experiences that contribute to my overall well-being. Body: Photography: One of my most cherished hobbies is photography. Capturing moments frozen in time allows me to express my creativity and view the world through a unique lens. Whether it's the vibrant hues of a 
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About