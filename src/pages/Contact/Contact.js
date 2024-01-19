import React, {useState} from 'react';
import { toast } from 'react-toastify';
import axios from "axios";
import "../Contact/Contact.css";
import contact_img from "../../assets/images/Contact-us.png";
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import { TfiEmail } from "react-icons/tfi";
import Rotate from 'react-reveal/Rotate';
import Wobble from 'react-reveal/Wobble';


const Contact = () => {

    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")


    // submit button

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(!name || !email || !msg){
                toast.error("Please provide all fields");
            }
            const res = await axios.post('/api/v1/portfolio/sendEmail',{name, email, msg})

            // validation success

            if(res.data.success){
                toast.success(res.data.message)
                setname("")
                setEmail("")
                setMsg(" ")
            }
            else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            
        }
    }
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
                                    <a href='https://www.linkedin.com/in/pranjeet-kumar-b73698206' rel='noreferrer' target='_blank'><BsLinkedin color='blue'size={25} className='ms-2'/></a>
                                    <a href='https://github.com/pranjeetkumar' rel='noreferrer' target='_blank'><BsGithub color='black'size={25} className='ms-2'/></a>
                                    <a href='mailto: pranjeetkumarmahto@gmail.com' rel='noreferrer' target='_blank'><TfiEmail color='#d44638'size={25} className='ms-2'/></a>
                                </h4>
                            </div>
                            
                        
                        <div className='row px-3 mb-4'>
                            <div className='line'/>
                            <small className='or text-center'>OR</small>
                            <div className='line'/>
                        </div>
                        <div className='row px-3'>
                            <input type='text' name='name' placeholder='Enter your Name' className='mb-3' value={name} onChange={(e) => setname(e.target.value)}/>
                        </div>
                        <div className='row px-3'>
                            <input type='email' name='email' placeholder='Enter your Email Address' className='mb-3' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='row px-3'>
                            <textarea type='text' name='msg' placeholder='write your Message' className='mb-3' value={msg} onChange={(e) => setMsg(e.target.value)}/>
                        </div>
                        <div className='row px-3'>
                            <button className='button' onClick={handleSubmit}>Send Message</button>
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