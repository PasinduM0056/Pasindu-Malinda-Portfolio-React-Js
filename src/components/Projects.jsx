import React from 'react'
import {PROJECTS} from "../constants"
import Card from './Card'

const Projects = () => {
  return (
    <div id='projects'>
        <h2 className='mt-20 text-center text-4xl font-semibold'>Projects</h2>
        <div className='flex flex-wrap justify-center py-8'>
            {PROJECTS.map((projects, index) => (
                <div key={index}>
                <Card image={projects.image}
                        title={projects.title}
                        subtitle={projects.subtitle}
                        link="#" />
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default Projects