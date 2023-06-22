import { IconButton } from '@mui/material';
import React from 'react';
import { Element } from 'react-scroll';
import { LinkedIn,Instagram,CodeOutlined } from '@material-ui/icons';
import './Contact.css';
const Contact = () => {
  return (
    <div>
        <Element className='contact' id='contact'>
          <h1>Contact</h1>
          <div className='contact_container'>
            <p>
              Email : <span>vishalljeganath@gmail.com</span>
            </p>
            <p>
              Github Username : <span>vishal0507</span>
            </p>
            <div className='contact_icons'>
              <a href='https://www.linkedin.com/in/vishall-jeganath-95199a209/'>
                <IconButton>
                  <LinkedIn/>
                </IconButton>
              </a>
              <a href='https://www.hackerrank.com/vishalljeganath?hr_r=1'>
                <IconButton>
                  <CodeOutlined/>
                </IconButton>
              </a>
              <a href='https://www.instagram.com/vishal_rocky05/'>
                <IconButton>
                  <Instagram/>
                </IconButton>
              </a>
            </div>
          </div>
        </Element>
    </div>
  )
}

export default Contact