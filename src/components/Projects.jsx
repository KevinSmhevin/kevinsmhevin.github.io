import ProjectCard from './ProjectCard'
import './Projects.css'

const Projects = () => {
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
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Here are some of my recent projects</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
