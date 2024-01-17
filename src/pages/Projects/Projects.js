import React from 'react';
import "../Projects/Projects.css";
import project1 from "../../assets/images/project1.png";
import Roll from 'react-reveal/Roll'
import Rotate from 'react-reveal/Rotate';



const Projects = () => {
  return (
    <>
    <div className='container project' id='project'>
        <Roll right>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>projects</h2>
        <hr/>
        <p className='pb-3 text-center'>Here, My Recent Projects with GitHub Links and Source Code</p>
        </Roll>

         {/* card design */}
        <div className='row' id='ads'>
            
            <Rotate>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'> Full Stack</span>
                        <img src={project1} alt='project1'/>
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Mongodb Atlas, </span>
                        <span className='card-detail-badge'>Express js, </span>
                        <span className='card-detail-badge'>React js, </span>
                        <span className='card-detail-badge'>Node js</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5>Grocery Store Billing Software</h5>
                        </div>
                        <a className='ad-btn' href='https://github.com/pranjeetkumar/Billing_software-in-python'>View</a>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'> Full Stack</span>
                        <img src={project1} alt='project1'/>
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Mongodb Atlas, </span>
                        <span className='card-detail-badge'>Express js, </span>
                        <span className='card-detail-badge'>React js, </span>
                        <span className='card-detail-badge'>Node js</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5>Grocery Store Billing Software</h5>
                        </div>
                        <a className='ad-btn' href='https://github.com/pranjeetkumar/Billing_software-in-python'>View</a>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'> Full Stack</span>
                        <img src={project1} alt='project1'/>
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Mongodb Atlas, </span>
                        <span className='card-detail-badge'>Express js, </span>
                        <span className='card-detail-badge'>React js, </span>
                        <span className='card-detail-badge'>Node js</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5>Grocery Store Billing Software</h5>
                        </div>
                        <a className='ad-btn' href='https://github.com/pranjeetkumar/Billing_software-in-python'>View</a>
                    </div>
                </div>
            </div>
            </Rotate>
        </div>
       
    </div>
    </>
  )
}

export default Projects