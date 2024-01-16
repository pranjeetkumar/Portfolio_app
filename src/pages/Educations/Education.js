import React from 'react';
import {MdSchool} from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../Educations/Education.css';
import { useTheme } from '../../context/ThemeContext';

const Education = () => {
  const [theme] = useTheme()
  return (
    <>
    <div className='education' id='education'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>educations</h2>
        <hr/>
    
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020-2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">B.tech</h3>
    <h4 className="vertical-timeline-element-subtitle">IKG PTU, Kapurthala</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020-2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">B.tech</h3>
    <h4 className="vertical-timeline-element-subtitle">IKG PTU, Kapurthala</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020-2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">B.tech</h3>
    <h4 className="vertical-timeline-element-subtitle">IKG PTU, Kapurthala</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020-2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">B.tech</h3>
    <h4 className="vertical-timeline-element-subtitle">IKG PTU, Kapurthala</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    </>
  )
}

export default Education