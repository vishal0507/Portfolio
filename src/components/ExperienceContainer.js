import React from 'react'
import { Element } from 'react-scroll';
import ExperienceBox from './ExperienceBox';
import './ExperienceContainer.css';

const ExperienceContainer = () => {
  return (
    <div>
        <Element className="experienceContainer" id="exp">
        <h1>Experience</h1>
        <div className='experienceContainer__info'>
            <ExperienceBox number="5+" title="Mini-Projects"/>
            <ExperienceBox number="2+" title="Major-Projects" style={{backgroundColor:"#f64c08"}}/>
            <ExperienceBox number="3+" title="Programming Language"/>
        </div>
        </Element>
    </div>
  )
}

export default ExperienceContainer