import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import Testimoni from './pages/Testimoni'
import Footer from './pages/Footer'

function App() {

  return (
    <>
     <Navbar />
     <HeroSection/>
     <Testimoni/>
     <Footer/>
    </>
  )
}

export default App
