import React from 'react';
import "../Contact/Contact.css";
import contact_img from "../../assets/images/Contact-us.png";
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
import Rotate from 'react-reveal/Rotate';
import Wobble from 'react-reveal/Wobble';


const Contact = () => {
  return (
    <>
    <div className='contact' id='contact'>
        <div className='card card0 border-0'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                    <div className='card1'>
                        <div className='row border-line'>
                            <Wobble>
                            <img src={contact_img} alt='' className='image'/>
                            </Wobble>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                    <Rotate>
                    <div className='card2 d-flex card border-0 px-4 py-5'>
                        <div className='row'>
                            <div className='row'>
                                <h4>Contact with 
                                    <BsLinkedin color='blue'size={25} className='ms-2'/>
                                    <BsGithub color='black'size={25} className='ms-2'/>
                                    <BsInstagram color='red'size={25} className='ms-2'/>
                                </h4>
                            </div>
                            
                        
                        <div className='row px-3 mb-4'>
                            <div className='line'/>
                            <small className='or text-center'>OR</small>
                            <div className='line'/>
                        </div>
                        <div className='row px-3'>
                            <input type='text' name='name' placeholder='Enter your Name' className='mb-3'/>
                        </div>
                        <div className='row px-3'>
                            <input type='email' name='email' placeholder='Enter your Email Address' className='mb-3'/>
                        </div>
                        <div className='row px-3'>
                            <textarea type='text' name='msg' placeholder='write your Message' className='mb-3'/>
                        </div>
                        <div className='row px-3'>
                            <button className='button' type='submit'>Send Message</button>
                        </div>
                    </div>
                    
                </div>
                </Rotate>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact