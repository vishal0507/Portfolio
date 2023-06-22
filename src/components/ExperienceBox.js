import React from 'react';
import './ExperienceBox.css';

const ExperienceBox = ({number,title,style}) => {
  return (
    <div>
        <div style={{...style}} className='experience'>
            <h1>{number}</h1>
            <p>{title}</p>
        </div>
      
    </div>
  )
}

export default ExperienceBox