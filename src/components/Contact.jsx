import { useState } from "react";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import axios from "axios"; // Import Axios
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message!");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>
            <p className="contact-description">Feel free to reach out to me for any questions or opportunities.</p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-text">
                  <h4 className="contact-label">Email</h4>
                  <a href="mailto:nirmalsamson1017@gmail.com" className="contact-value">
                    nirmalsamson1017@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div className="contact-text">
                  <h4 className="contact-label">Phone</h4>
                  <a href="tel:+919400640939" className="contact-value">
                    +91 9400640939
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <div className="contact-text">
                  <h4 className="contact-label">Location</h4>
                  <span className="contact-value">Alappuzha, Kerala</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-input" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-textarea" placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-button">
                <FaPaperPlane size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
