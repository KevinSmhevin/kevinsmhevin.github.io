import { useRef, useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'
import mountainStars from "/assets/images/mountain-stars.jpg";
import mountainAerial from "/assets/images/mountain-aerial.jpg";

const Projects = () => {
  const scrollContainerRef = useRef(null)
  const [isAtEnd, setIsAtEnd] = useState(false)
  const [isAtStart, setIsAtStart] = useState(true)

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

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const { scrollLeft, scrollWidth, clientWidth } = container
      // More lenient threshold to account for rounding
      const isEnd = Math.abs(scrollLeft + clientWidth - scrollWidth) < 20
      const isStart = scrollLeft < 20
      setIsAtEnd(isEnd)
      setIsAtStart(isStart)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      checkScrollPosition()
      container.addEventListener('scroll', checkScrollPosition)
      // Also check on resize
      window.addEventListener('resize', checkScrollPosition)
      
      return () => {
        container.removeEventListener('scroll', checkScrollPosition)
        window.removeEventListener('resize', checkScrollPosition)
      }
    }
  }, [])

  const handleScrollClick = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8 // Scroll 80% of container width
      const scrollDirection = isAtEnd ? -scrollAmount : scrollAmount
      scrollContainerRef.current.scrollBy({
        left: scrollDirection,
        behavior: 'smooth'
      })
    }
  }
  const projects = [
    {
      id: 1,
      title: 'Pokebin',
      description: 'Pokebin is an ecommerce app I built for selling trading card and collectibles with a React frontend using Vite, Tailwind CSS, and Axios and a Python Django REST backend, backed by a Postgres database and AWS infrastructure.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Django', 'PostgreSQL', 'AWS'],
      image: '/assets/images/pokebin_logo.svg',
      link: 'https://pokebin.app/',
      github: 'https://github.com/KevinSmhevin/ecommerce',
    },
    {
      id: 2,
      title: 'ShortURL',
      description: 'ShortURL is a full-stack URL shortening service with analytics I built. It features URL shortening, click tracking, and engagement metrics. Built with FastAPI (Python) backend and React frontend using Vite, Tailwind CSS, and Axios, with SQLAlchemy for database operations and PostgreSQL support.',
      technologies: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Tailwind CSS'],
      image: '/assets/images/shorturl_logo.svg',
      link: 'https://www.shorter-url.pro/',
      github: 'https://github.com/KevinSmhevin/shorter-url',
    },
    {
      id: 3,
      title: 'Chef Quackly',
      description: 'Chef Quackly is a chef React + AI recipe app integrating LLMs that helps you find recipes based on provided ingredients.',
      technologies: ['React', 'AI/LLM', 'JavaScript'],
      image: '/assets/images/rubber-duck.png',
      link: 'https://chef-quackly.onrender.com/',
      github: 'https://github.com/KevinSmhevin/chef-quackly',
    },
    {
      id: 4,
      title: 'Quizzical',
      description: 'Quizzical is a simple React trivia quiz app where you can test your trivia knowledge skills!',
      technologies: ['React', 'JavaScript', 'API'],
      image: '/assets/images/quiz.png',
      link: 'https://kevinparas.me/quizzical/',
      github: 'https://github.com/KevinSmhevin/quizzical',
    },
    {
      id: 5,
      title: 'Watch-games',
      description: 'Watch-games is a simple twitch api app to find random streamers by video game.',
      technologies: ['React', 'Twitch API', 'JavaScript'],
      image: 'https://i.imgur.com/RFlYkt9.png',
      link: 'https://kevinsmhevin.github.io/watch-games/',
      github: 'https://github.com/KevinSmhevin/watch-games',
    },
    {
      id: 6,
      title: 'React Components Library',
      description: 'A collection of reusable React components library with customizable styling and modern design patterns.',
      technologies: ['React', 'JavaScript', 'CSS'],
      image: '/assets/images/react-icon.svg',
      link: null,
      github: 'https://github.com/KevinSmhevin/react-components',
    },
  ]

  return (
    <section 
      id="projects" 
      className="projects"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <div className="section-bg-overlay"></div>
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Here are some of my recent projects</p>
        <div className="projects-scroll-container" ref={scrollContainerRef}>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        <div className="projects-scroll-indicator" onClick={handleScrollClick}>
          <svg
            className={`projects-scroll-indicator-icon ${isAtEnd ? 'flip-horizontal' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
            <polyline points="15 18 21 12 15 6"></polyline>
          </svg>
          <span>{isAtEnd ? 'Scroll to see previous projects' : 'Scroll to see more projects'}</span>
          <svg
            className={`projects-scroll-indicator-icon ${isAtEnd ? 'flip-horizontal' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
            <polyline points="15 18 21 12 15 6"></polyline>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Projects
