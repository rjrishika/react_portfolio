import React from 'react'
import "../Styles/Projects.css"
import {ProjectImages} from "./ProjectImages"
import {FaGithub} from 'react-icons/fa'

function Projects() {
    return (
        <section className='projects section' id="projects">
            <div className='circle projects_circleOne'></div>
            <div className='circle projects_circleThree'></div>

            <h2 className='section_title'>Projects</h2>

            <div className='projectsContainer bd_grid'>
                {
                    ProjectImages && 
                    ProjectImages.map((image)=>(
                        <div className='projectImg' key ={image.id}>
                            <img src={image.imgSrc} alt='' />
                        
                                <FaGithub className='git' />
                                
                              
                        
                           
                        </div>

                    )
                    )
                }
               
               
            </div>
        </section>
    )
}

export {Projects}
