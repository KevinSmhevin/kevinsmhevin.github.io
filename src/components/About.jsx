import { useState, useEffect } from 'react'
import './About.css'
import mountainStars from "/assets/images/mountain-stars.jpg";
import mountainAerial from "/assets/images/mountain-aerial.jpg";

const About = () => {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    mountainStars,
    mountainAerial,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section 
      id="about" 
      className="about"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <div className="section-bg-overlay"></div>
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="section-text">
              I'm Kevin, a software developer with 4+ years experience in managing highly scalable applications.
            </p>
            <p className="section-text">
              I previously worked at <a href="https://www.tesla.com/" target="_blank" rel="noopener noreferrer" className="link">Tesla</a> as part of the digital products team. 
              There I worked on tools and infrastructure to support the battery, energy and charging products.
            </p>
            <p className="section-text">
              I'm passionate about building scalable applications and exploring new technologies. 
              I enjoy working with React, Python, and cloud infrastructure to create impactful solutions.
            </p>
          </div>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Full Name:</span>
              <span className="detail-value">Kevin Paras</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">United States</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">
                <a href="mailto:kevincparas@gmail.com" className="link">kevincparas@gmail.com</a>
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Website:</span>
              <span className="detail-value">
                <a href="https://kevinparas.me" target="_blank" rel="noopener noreferrer" className="link">kevinparas.me</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
