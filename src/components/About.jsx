import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
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
