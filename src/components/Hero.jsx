import './Hero.css'
import profileImage from '/assets/images/kevin_profile.jpeg'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello! I'M</p>
            <h1 className="hero-name">Kevin Paras</h1>
            <h2 className="hero-title">Software Engineer</h2>
            <p className="hero-description">
              I'm a software developer with 4+ years experience in managing highly scalable applications.
              I previously worked at Tesla as part of the digital products team.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn--primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="btn btn--secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src={profileImage}
              alt="Kevin Paras"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
