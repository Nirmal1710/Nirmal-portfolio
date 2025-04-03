import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail,FiMenu,FiX } from "react-icons/fi";
import { FaFolderOpen } from "react-icons/fa";

import image from "../assets/Nirmal-profile.jpg";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Contact from "./Contact";
import "./Home.css";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Animation for position heading

  const positions = ["Full Stack Developer", "Frontend Developer", "Photography"];
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => (prev + 1) % positions.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className={`portfolio-container ${menuOpen ? "mobile-menu-open" : ""}`}>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">Portfolio</div>

          {/* Desktop Navigation */}
          <nav className={`navigation ${menuOpen ? "open" : ""}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#certificates" className="nav-link">Certificates</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <a href="https://drive.google.com/file/d/1lfhST76jDkeHdZIdsXPJME8ved7FMkWa/view?usp=drivesdk" className="resume-button desktop-only">Resume < FaFolderOpen/></a>

          {/* Toggle Menu Button */}
          <button className="menu-toggle-button" onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section id="home" className="home-section">
          <div className="home-content">
            <div className="info-container">
              <h1 className="name-heading"> Hi, I'm <span className="highlight">Nirmal S Samson</span></h1>

            {/* Slide-in Animation */}
               <h2 key={currentPosition} className="position-heading slide-in">{positions[currentPosition]}</h2>

              <p className="intro-text">
              "Passionate about technology with expertise in Python, Django, and the MERN stack.
               Skilled in building dynamic web applications and crafting user-friendly solutions. 
               Always eager to learn and innovate in the world of technology."


              </p>

              {/* Social Links */}
              <div className="social-links">
                <a href="https://github.com/Nirmal1710" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FiGithub size={20}/>
                </a>
                <a href="https://www.linkedin.com/in/nirmal-s-samson-76481a316/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FiLinkedin size={20}/>
                </a>
                <a href="mailto:nirmalsamson1017@gmail.com" className="social-icon">
                  <FiMail size={20}/>
                </a>
                
              </div>

              {/* Buttons */}
              <div className="cta-buttons">
                <a href="#contact" className="primary-button">Contact Me</a>
                <a href="#projects" className="secondary-button">View Projects</a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="profile-image-container">
              <div className="profile-image-wrapper">
                <img
                  src={image}
                  alt="Profile"
                  width={320}
                  height={320}
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <About />
        
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Nirmal S Samson. All rights reserved.</p>
          <div className="footer-social-links">
            <a href="https://github.com/Nirmal1710" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/nirmal-s-samson-76481a316/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FiLinkedin />
            </a>
            <a href="mailto: nirmalsamson1017@gmail.com" className="footer-social-icon">
              <FiMail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
