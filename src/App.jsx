import React from 'react'
import NavBar from "./components/Navbar"
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
      <NavBar />
      <HeroSection />
      <About />
      <Projects />
    </main>
  )
}

export default App