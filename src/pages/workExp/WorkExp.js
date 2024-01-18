import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../workExp/WorkExp.css"
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { useTheme } from '../../context/ThemeContext';

const WorkExp = () => {
    const [theme] = useTheme()
  return (
    <>
    <div className='work' id='workExp'>
        <div className='container work-exp'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Work Experience</h2>
        <hr/>
        <VerticalTimeline lineColor='#1e1e2c'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentArrowStyle={{ borderRight: '7px solid  white' }}
                contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
                date="Oct 2023 - Nov 2023"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<LiaLaptopCodeSolid />}>
                <h3 className="vertical-timeline-element-title">Metro Food Point using Reactjs App</h3>
                <h4 className="vertical-timeline-element-subtitle">Web App Using MERN Stack</h4>
                <p>
                – A dynamic UI, powered by APIs, lets users browse restaurants, explore menus, and order seamlessly. Order status updates
                and real-time tracking via web sockets ensure transparency and keep users informed.<br/>
                – Impact: Increased restaurant orders, improved user experience, streamlined delivery process.

                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentStyle={{ background: 'white', color: 'black' }}
                contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="Apr 2023 - May 2023"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<LiaLaptopCodeSolid />}>
                <h3 className="vertical-timeline-element-title">CureNation</h3>
                <h4 className="vertical-timeline-element-subtitle">A dynamic Appointment Booking System website using Javascript, PHP and MySQL</h4>
                <p>– I designed and implemented a user-friendly website using PHP that serves as a centralized platform for listing all hospitals within a specific area. The primary focus was to simplify the appointment booking process, making it convenient for users to schedule appointments at their preferred hospital.<br/>
                – The website provides comprehensive information about each hospital, ensuring users can make informed decisions based on location, services offered, and other relevant details.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentStyle={{ background: 'white', color: 'black' }}
                contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="July 2022 - Aug 2022"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<LiaLaptopCodeSolid />}>
                <h3 className="vertical-timeline-element-title">Grocery Store Billing Software</h3>
                <h4 className="vertical-timeline-element-subtitle">GUI Based Tkinter Application in Python</h4>
                <p>– Developed a user-friendly graphical interface application using Tkinter in Python for generating electronic invoices in a grocery store. Streamlined the process of creating invoices by allowing to input product details, automatically calculate totals, and generate professional-looking invoices.<br/>
                – Implemented features such as dynamic data entry, saving invoices, automatic calculations, and file handling for saving and printing invoices.

                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </div>
    </>
  )
}

export default WorkExp