import React from 'react'
import { PROFILE } from "../constants"
import profilePic from "../assets/robertButcher1.png"
import { motion } from 'framer-motion'
import downloadIcon from "../assets/download-icon.png"; // Import download icon image

const HeroSection = () => {
  const downloadResume = () => {
    // Assuming your resume is a PDF file named "resume.pdf"
    const resumeUrl = "../assets/resume.pdf";

    // Create a temporary anchor element to trigger download
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = "resume.pdf";
    downloadLink.click();
  };

  return (
    <>
      <div className='relative flex min-h-screen items-end justify-center' id='hero'>
        <motion.img
          src={profilePic}
          alt={PROFILE.name}
          className='absolute inset-0 z-10 h-full w-full object-cover'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div className='z-20 mx-4 max-w-3xl pb-20'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}>
          <h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl'>
            {PROFILE.name}
          </h1>
          <p className='pt-2 font-semibold'>{PROFILE.info}</p>
          <a href="#" onClick={downloadResume} className="flex items-center gap-2">  {/* Added 'flex items-center' */}
            <img src={downloadIcon} alt="Download Resume" className="cursor-pointer h-7 w-7 mt-2 " />
            <p className="mt-2 text-sm text-gray-400 hover:text-yellow-400">Download my resume</p>
          </a>
        </motion.div>
      </div>
    </>
  )
}

export default HeroSection