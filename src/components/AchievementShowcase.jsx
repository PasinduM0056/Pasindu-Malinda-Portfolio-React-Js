import React from 'react'
import video1 from "../assets/video1.mp4"
import { ACHIEVEMENT } from '../constants'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.8,
    },
  },
}

const itemVariants = {
  hidden: {opacity: 0, x: -20},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}


const AchievementShowcase = () => {
  return (
    <div id='award'>
      <h2 className='mb-12 mt-20 text-center text-4xl font-semibold'>My Blogs</h2>
      <motion.div className='mx-auto flex max-w-6xl flex-wrap'
                  initial='hidden'
                  whileInView='visible'
                  variants={containerVariants}
                  viewport={{once: true}}>
        <motion.div className='w-full p-2 sm:w-1/2'
                    variants={itemVariants}>
          <video className='w-full rounded-lg' autoPlay muted loop playsInline>
            <source src={video1} type='video/mp4' />
          </video>
        </motion.div>
        <motion.div className='w-full p-4 text-center sm:w-1/2'
                    variants={itemVariants}>
          <h2 className='mb-4 text-3xl'>{ACHIEVEMENT.title}</h2>
          <a href="https://medium.com/@malindafiv56/kickstart-your-cloud-journey-with-free-aws-resources-0dbed0571f2b" target="_blank" rel="noopener noreferrer">
            <span className='mt-4 border-b border-gray-400 py-2 text-sm text-gray-400 hover:text-yellow-400 hover:border-yellow-400'>
              {ACHIEVEMENT.award}
            </span>
          </a>
          <p className='m-4 p-2 italic'>{ACHIEVEMENT.description}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AchievementShowcase