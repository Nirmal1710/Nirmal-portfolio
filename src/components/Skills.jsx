import { FaCode, FaDatabase, FaServer, FaGlobe, FaMicrochip } from "react-icons/fa";
import { BiPaint } from "react-icons/bi";
import "./Skills.css"

export default function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <FaCode className="category-icon" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Responsive Design"],
    },

    {
      id: 2,
      title: "Backend Development",
      icon: <FaServer className="category-icon" />,
      skills: ["Node.js", "Express.js", "Python", "Django", "Postman API"],
    },

    {
      id: 3,
      title: "Database",
      icon: <FaDatabase className="category-icon" />,
      skills: ["MongoDB", "MySQL", "SQlite3", "ORM"],
    },

    {
      id: 4,
      title: "DevOps & Deployment",
      icon: <FaGlobe className="category-icon" />,
      skills: ["Git", "GitHub",  "AWS"],
    },
    {
      id: 5,
      title: "Design",
      icon: <BiPaint className="category-icon" />,
      skills: ["Figma", "Adobe XD", "Canva", "Photoshop", "Lightroom"],
    },
    {
      id: 6,
      title: "Soft Skills",
      icon: <FaMicrochip className="category-icon" />,
      skills: ["Problem Solving", "Team Collaboration","Communication", "Time Management","Analytical Skills"],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <div className="category-header">
                {category.icon}
                <h3 className="category-title">{category.title}</h3>
              </div>
              <ul className="skills-list">
                {category.skills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

