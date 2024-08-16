import React, { useState } from 'react';
import { PROJECTS } from "../constants";
import Card from './Card';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const categories = ["All", "Web Development", "Cloud", "DevOps", "Video Editing"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = selectedCategory === "All Projects"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <div id='projects'>
      <motion.h2 className='mt-20 text-center text-4xl font-semibold'
        initial='hidden'
        whileInView='visible'
        variants={containerVariants}
        viewport={{ once: true }}>
        Projects
      </motion.h2>
      
      {/* Category Buttons */}
      <div className='flex justify-center mt-8'>
        {categories.map((category) => (
          <a
            key={category}
            className={`px-2 py-2 m-2 text-sm ${selectedCategory === category ? ' text-yellow-400' : ' text-gray-400'}`}
            onClick={() => setSelectedCategory(category)}>
            {category}
          </a>
        ))}
      </div>

      {/* Projects */}
      <motion.div className='flex flex-wrap justify-center py-8'
        initial='hidden'
        whileInView='visible'
        variants={containerVariants}
        viewport={{ once: true }}>
        {filteredProjects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card image={project.image} title={project.title} subtitle={project.subtitle} link="#" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
