import React, { useState } from 'react';
import { PROJECTS } from "../constants";
import Card from './Card';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const categories = ["All Projects", "Web Development", "Cloud", "DevOps", "Video Editing"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory === "All Projects"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <div id='projects'>
      <motion.h2 className='mt-20 text-center text-4xl font-semibold'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
        Projects
      </motion.h2>
      
      {/* Category Buttons */}
      <div className='flex justify-center mt-8'>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 m-2 text-sm cursor-pointer ${selectedCategory === category ? 'text-yellow-400' : 'text-gray-400'}`}
            onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className='flex flex-wrap justify-center py-8'>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title} // Unique key based on project title or another unique identifier
            initial='hidden'
            animate='visible'
            variants={itemVariants}
          >
            <Card 
              image={project.image} 
              title={project.title} 
              subtitle={project.subtitle} 
              link={project.link} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
