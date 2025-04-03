import image from "../assets/Nirmal.jpg";
import "./About.css"


export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img
              src={image}
              alt="About me"
              width={400}
              height={400}
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h3 className="about-subtitle">Who I Am</h3>
            <p className="about-description">
            I am Nirmal S Samson, a passionate Full Stack Developer skilled in MERN stack, Python, and Java. 
            I specialize in building accessible, responsive, and performant web applications using modern technologies.
            With expertise in React.js, Express.js, MongoDB, and Node.js, I develop seamless user experiences.
            I am also experienced in Django, SQL, and API development.


            </p>
            <p className="about-description">
            🎓 <strong>Education</strong> <br />
            I hold a Master's in Computer Application from the University of Kerala <strong>(65%)</strong> and a Bachelor's in Computer Science from the University of Kerala <strong>(62.69%)</strong>, 
            where I developed a strong foundation in software development, web technologies, and database management.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Nirmal S Samson</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">nirmalsamson1017@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Alappuzha, Kerala</span>
              </div>
              <div className="info-item">
                <span className="info-label">Availability:</span>
                <span className="info-value">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

