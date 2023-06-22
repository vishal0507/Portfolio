import React, { useState } from 'react';
import './Project.css';

const Project = ({img,title,desc,link}) => {
    const [show,setShow] = useState(false);
  return (
    <div>
        <a href={link}>
            <div className='project' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
                {
                   show? (
                    <div className='projectContent'>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ) : (
                    <img src={img} alt=''/>
                ) 
                }

            </div>
        </a>

    </div>
  )
}

export default Project