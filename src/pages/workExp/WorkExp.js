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
                date="2023 - present"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<LiaLaptopCodeSolid />}>
                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">XYZ private limited</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentStyle={{ background: 'white', color: 'black' }}
                contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2023 - present"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<LiaLaptopCodeSolid />}>
                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">XYZ private limited</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentStyle={{ background: 'white', color: 'black' }}
                contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2023 - present"
                iconStyle={{ background: '#138781', color: '#fff' }}
                icon={<LiaLaptopCodeSolid />}>
                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">XYZ private limited</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </div>
    </>
  )
}

export default WorkExp