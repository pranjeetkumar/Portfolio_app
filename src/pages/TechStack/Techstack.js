import React from 'react';
import "../TechStack/Techstack.css"
import { TechstackList } from '../../utils/TechstackList';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

const Techstack = () => {
  return (
    <>
    <div className='container techstack' id='techstack'>
        <Roll right>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technology stack</h2>
        <hr/>
        <p className='pb-3 text-center'>👉 Including Programming Languages, Frameworks, Databases, Front-End and Back-End tools, and APIs</p>
        </Roll>
        <div className='row'>
        {TechstackList.map(tech =>(
            <Fade right>
            <div key={tech._id} className='col-md-3'>
                <div className='card m-2'>
                    <div className='card-content'>
                        <div className='card-body'>
                            <div className='media d-flex justify-content-center'>
                                <div className='align-self-center'>
                                <tech.icon className='tech-icon'/>
                                </div>
                                <div className='media-body'>
                                    <h5>{tech.name}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        ))}
        </div>
    </div>
    
    </>
  )
}

export default Techstack