import React from 'react';
import { Element } from 'react-scroll';
import Skilling from '../asserts/skill.webp';
import { LinearProgress } from '@material-ui/core';
import './SkillContainer.css';

const SkillContainer = () => {
    return (
        <div>
            <Element className='skillContainer' id="skills">
                <div className='skillContainer__image'>
                    <img src={Skilling} alt=""></img>
                </div>
                <div className="skillContainer__text">
                    <h2>SKILLSET</h2>
                    <div className='skillContainer_skillset'>
                        <h4>HTML</h4>

                        <div className='skillContainer_slider skillContainer_slider1' >
                            <LinearProgress variant='determinate' value={90} />
                        </div>
                    </div>
                    <div className='skillContainer_skillset'>
                        <h4>CSS</h4>

                        <div className='skillContainer_slider skillContainer_slider2' >
                            <LinearProgress variant='determinate' value={90} />
                        </div>
                    </div>
                    <div className='skillContainer_skillset'>
                        <h4>JavaScript</h4>

                        <div className='skillContainer_slider skillContainer_slider3' >
                            <LinearProgress variant='determinate' value={80} />
                        </div>
                    </div>
                    <div className='skillContainer_skillset'>
                        <h4>React</h4>

                        <div className='skillContainer_slider skillContainer_slider4' >
                            <LinearProgress variant='determinate' value={90} />
                        </div>
                    </div>
                    <div className='skillContainer_skillset'>
                        <h4>NodeJS</h4>

                        <div className='skillContainer_slider skillContainer_slider5' >
                            <LinearProgress variant='determinate' value={70} />
                        </div>
                    </div>
                    <div className='skillContainer_skillset'>
                        <h4>MongoDB</h4>

                        <div className='skillContainer_slider skillContainer_slider6' >
                            <LinearProgress variant='determinate' value={80} />
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    )
}

export default SkillContainer;