import React from 'react'
import NavBar from "./components/Navbar"
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
      <NavBar />
      <HeroSection />
    </main>
  )
}

export default App