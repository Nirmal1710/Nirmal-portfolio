
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import React from "react"
import netflix from "../assets/Netflix.png"
import crowd from "../assets/Crowd.png"
import safeKerala from "../assets/safekerala.png"
import "./Projects.css"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Crowd Funfing Platform",
      description:
        "A secure and user-friendly crowdfunding platform built with the MERN stack, enabling seamless campaign creation, donations, and transparent management.",
      
        image: crowd,
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js","Postman API","JWT Token","Axios"],
      githubLink: "https://github.com/Nirmal1710/Crowd-Funding-Website-.git",
      // liveLink: "https://example.com",
    },
    {
      id: 2,
      title: "Safe Kerala",
      description: "A web-enabled portal for managing and verifying migrant workers in Kerala, allowing authorities to authorize workers, block offenders, and enable user searches based on skills.",
      image: safeKerala,
      technologies: ["Python", "Django", "Sqlite3", "HTML", "CSS","Android" ],
      githubLink: "https://github.com/Nirmal1710/Safe_Kerala.git",
      //liveLink: "https://example.com",
    },
    {
      id: 3,
      title: "Netflix Static Clone",
      description: "A static Netflix clone with a sleek UI, showcasing a responsive layout, movie thumbnails, and a modern design using HTML, CSS, and Bootstrap.",
      image: netflix,
      technologies: ["HTML", "CSS", "Bootstrap"],
      githubLink: "https://github.com/Nirmal1710/Netflix-static-website-project.git",
      //liveLink: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image || ""}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub size={22}/>
                    <span><u>Github Code</u></span>
                  </a>
                  {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt size={18} />
                    <span>Live Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

