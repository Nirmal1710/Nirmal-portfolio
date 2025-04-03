import React from "react";
import Python from "../assets/python.png";
import Swayam from "../assets/swayam.png";
import Edunet from "../assets/edunet.jpg";
import Hacking from "../assets/hacking.png";

import { FaCalendarAlt, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import "./Certificates.css";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "MERN Stack Development",
      organization: "Edunet, EY & KASE",
      date: "March 2025",
      image: Edunet,
      certificateLink: "",
    },
    {
      id: 2,
      title: "Python Web Development",
      organization: "Edure",
      date: "March 2024",
      image: Python,
      certificateLink: "https://drive.google.com/file/d/1olNsFQU6mH0KonIJSf3eWbZBy-FXLsNf/view?usp=drivesdk",
    },
    {
      id: 3,
      title: "Information Technology",
      organization: "Swayam",
      date: "October 2023",
      image: Swayam,
      certificateLink: "https://drive.google.com/file/d/1SxPUFsxPlY827fkXAV9gm30__OvbJWnF/view?usp=drivesdk",
    },
    {
      id: 4,
      title: "Hacking Workshop",
      organization:"Red Team Hacker Academy",
      date: "February 2024",
      image: Hacking,
      certificateLink: "https://drive.google.com/file/d/1uL4EBLdITlGh7TnHx94y1bgIPZl9kg01/view?usp=drivesdk",
    },
    
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="certificate-card">
              <div className="certificate-image-container">
                <img
                  src={certificate.image || ""}
                  alt={certificate.title}
                  width={300}
                  height={200}
                  className="certificate-image"
                />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{certificate.title}</h3>
                <div className="certificate-details">
                  <div className="certificate-organization">
                    <FaAward size={16} />
                    <span>{certificate.organization}</span>
                  </div>
                  <div className="certificate-date">
                    <FaCalendarAlt size={16} />
                    <span>{certificate.date}</span>
                  </div>
                </div>
                <div className="certificate-link">
                  <a href={certificate.certificateLink} target="_blank" rel="noopener noreferrer" className="certificate-link-button">
                    <FaExternalLinkAlt size={14} /> View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
