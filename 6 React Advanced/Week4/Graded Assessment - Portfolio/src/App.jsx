import { useState } from 'react'
import Header from './components/Header'
import Landing from './components/LandingSection'
import Projects from './components/ProjectsSection'
import Contact from './components/ContactMeSection'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
