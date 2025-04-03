import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const API_URL = "https://nirmal-personal-portfolio.onrender.com";


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
    
      </Routes>
    </Router>
      
    </>
  )
}

export default App
