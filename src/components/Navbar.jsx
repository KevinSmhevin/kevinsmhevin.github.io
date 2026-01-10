import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const Navbar = ({ activeSection, onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    if (onNavClick) {
      onNavClick(sectionId)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          KP
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'navbar-menu--open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="navbar-item">
              <a
                href={`#${item.id}`}
                className={`navbar-link ${activeSection === item.id ? 'navbar-link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="navbar-item">
            <ThemeToggle />
          </li>
        </ul>
        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
