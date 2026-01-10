import "./Hero.css";
import TypingEffect from "./TypingEffect";
import profileImage from "/assets/images/kevin_profile.jpeg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="hero"
      style={{ 
        backgroundImage: `url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello! I'M</p>
            <h1 className="hero-name">Kevin Paras</h1>
            <h2 className="hero-title">
              <TypingEffect text="Software Engineer" speed={100} />
            </h2>
            <p className="hero-description">
              I'm a software developer with 4+ years experience in managing
              highly scalable applications. I previously worked at Tesla as part
              of the digital products team.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn--primary"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <button
                className="btn btn--secondary"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={profileImage} alt="Kevin Paras" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
