import { useState, useEffect } from 'react'
import './Skills.css'
import mountainStars from "/assets/images/mountain-stars.jpg";
import mountainAerial from "/assets/images/mountain-aerial.jpg";

const Skills = () => {
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
  const ProgrammingLanguagesIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="category-icon"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  )

  const FrameworksIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="category-icon"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  )

  const ToolsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="category-icon"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  )

  const DatabasesIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="category-icon"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  )

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <ProgrammingLanguagesIcon />,
      skills: [
        'JavaScript',
        'TypeScript',
        'Python',
        'C#',
        'Java',
      ],
    },
    {
      title: 'Frameworks',
      icon: <FrameworksIcon />,
      skills: [
        'React',
        'Django',
        'FastAPI',
        'Node.js',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <ToolsIcon />,
      skills: [
        'Git',
        'Docker',
        'CI/CD',
        'AWS',
        'REST APIs',
        'GraphQL',
      ],
    },
    {
      title: 'Databases',
      icon: <DatabasesIcon />,
      skills: [
        'PostgreSQL',
        'DynamoDB',
        'MySQL',
        'SQLite',
      ],
    },
  ]

  return (
    <section 
      id="skills" 
      className="skills"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <div className="section-bg-overlay"></div>
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
