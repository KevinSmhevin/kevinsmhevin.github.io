import { useState, useEffect } from 'react'
import './Contact.css'
import mountainStars from "/assets/images/mountain-stars.jpg";
import mountainAerial from "/assets/images/mountain-aerial.jpg";

const Contact = () => {
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
  const GitHubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="social-icon-svg"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  )

  const LinkedInIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="social-icon-svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )

  const EmailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="social-icon-svg"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  )

  const ResumeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="social-icon-svg"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  )

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      url: 'https://github.com/KevinSmhevin',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/kevin-paras-1b7696104/',
    },
    {
      name: 'Email',
      icon: <EmailIcon />,
      url: 'mailto:kevincparas@gmail.com',
    },
    {
      name: 'Resume',
      icon: <ResumeIcon />,
      url: '/Kevin-Paras-Resume.pdf',
      download: true,
    },
  ]

  return (
    <section 
      id="contact" 
      className="contact"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <div className="section-bg-overlay"></div>
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Feel free to reach out if you want to collaborate or have any questions!
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:kevincparas@gmail.com" className="contact-link">
                kevincparas@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Website:</span>
              <a
                href="https://kevinparas.me"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                kevinparas.me
              </a>
            </div>
          </div>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.download ? undefined : "_blank"}
                rel={social.download ? undefined : "noopener noreferrer"}
                download={social.download ? "Kevin-Paras-Resume.pdf" : undefined}
                className="social-link"
                aria-label={social.name}
              >
                {social.icon}
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
