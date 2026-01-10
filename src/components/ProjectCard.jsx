import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  const imageWrapper = project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-image-wrapper"
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-card-image"
      />
    </a>
  ) : (
    <div className="project-card-image-wrapper">
      <img
        src={project.image}
        alt={project.title}
        className="project-card-image"
      />
    </div>
  )

  return (
    <div className="project-card">
      {imageWrapper}
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-card-links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link--primary"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-link ${project.link ? 'project-link--secondary' : 'project-link--primary'}`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
