import React from 'react';
import { Element } from 'react-scroll';
import Project  from './Project';
import './ProjectContainer.css';
import ChatBot from '../asserts/Chatbotapp.png';
import Ecommerce from '../asserts/Ecommerceapp.png';
import GalleryApp from '../asserts/GalleryApplication.png';
import ToDoList from '../asserts/TodoListapp.png';
import HotelBooking from '../asserts/hotelBooking.png';
import ReceipeApp from '../asserts/receipeApp.png';




const ProjectContainer = () => {
    const projects = [
        {
            img:ChatBot,
            title:"ChatBot",
            desc:"A chatbot is useful to add to our website because it will interact with the user when they enter our website. We can get contact details and other information from users by using the chatbot.",
            link:"www.google.com"
        },
        {
            img:Ecommerce,
            title:"Ecommerce Application",
            desc:" This was an eCommerce site with the features of login, product,cart, order, search, sorting, and an admin pane",
            link:"www.google.com"
        },
        {
            img:GalleryApp,
            title:"Gallery Application",
            desc:"Gallery App by using React and Bootstrap.",
            link:"www.google.com"
        }
        ,  {
            img:ToDoList,
            title:"To-Do-List",
            desc:"A to-do list application using the MERN stack. A to-do list is useful for everyone who needs to manage their schedule.",
            link:"www.google.com"
        },
        {
            img:HotelBooking,
            title:"Hotel Booking Application",
            desc:"The hotel booking website contains the features of the services and the different types of rooms available.",
            link:"www.google.com"
        },
        {
            img:ReceipeApp,
            title:"Receipe Application",
            desc:"A list of recipes will be displayed; if the user clicks on a recipe, it will display its ingredients and how to cook it.",
            link:"www.google.com"
        }
    ]
  return (
    <div>
        <Element className='projectContainer' id='projects'>
            <h1>Projects</h1>
            <p>
                Here are some projects which I done for making lives of people easy.
            </p>
            <div className='projectContainer__projects'>
                {
                    projects.map((project,index) =>{
                        return (
                            <Project key={index} img={project.img} title={project.title} desc={project.desc} link = {project.link}/>
                         
                        )
                    })
                }
            </div>
        </Element>
    </div>
  )
}

export default ProjectContainer;