import React from 'react';
import {Link} from 'react-scroll';
import './TopContent.css';

const TopContent = () => {
  return (
    <div>
        <div className='topContent'>
            <div className='topConetnt__Conntaner'>
                <h1>Mr.Vishall Jeganath</h1>
                <p>A Professional Full-Stack Developer</p>
                <a href='https://drive.google.com/file/d/1zBK3PGn1LgKsSNjt0YIDynxWCLLugOY9/view?usp=sharing'>
                    <button className='topContent_Downloadbutton'>Download CV</button>
                </a>
                <Link to ="projects" smooth={true} duration={500}>
                    <button className='topContent_workbutton'>My work</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TopContent