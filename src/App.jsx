import React from 'react'
import NavBar from "./components/Navbar"
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AchievementShowcase from './components/AchievementShowcase'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
      <NavBar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <AchievementShowcase />
      <Testimonials />
    </main>
  )
}

export default App