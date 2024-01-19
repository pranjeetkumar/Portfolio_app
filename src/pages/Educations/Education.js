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
    date="2021-2024"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">B.Tech CSE (LEET)</h3>
    <h4 className="vertical-timeline-element-subtitle">I.K. Gujral Punjab Technical University (Main Campus), Kapurthala</h4>
    <p>7.6 SGPA (Till 6th Sem)</p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2019-2021"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">PSBTE & IT (CSE LEET)</h3>
    <h4 className="vertical-timeline-element-subtitle">Mehr Chand Polytechnic College, Jalandhar City</h4>
    <p>76.6%</p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2017-2019"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">PSEB(10+2 Science)</h3>
    <h4 className="vertical-timeline-element-subtitle">Govt. Model Co-Edu. Senior Secondary School, Jalandhar City</h4>
    <p>71.5%</p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }):({ background: '#1e1e2c', color: 'white' })}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2017"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">PSEB(10th)</h3>
    <h4 className="vertical-timeline-element-subtitle">Sada Sukh Chopra S.D. Public Senior Secondary School, Jalandhar City</h4>
    <p>82.9%</p>
  </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    </>
  )
}

export default Education