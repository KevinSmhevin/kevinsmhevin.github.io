import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'home', label: '01.Home' },
    { id: 'about', label: '02.About' },
    { id: 'skills', label: '03.Skills' },
    { id: 'projects', label: '04.Projects' },
    { id: 'contact', label: '05.Contact' },
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
