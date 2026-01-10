import { useState, useEffect, useCallback, useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "skills", "projects", "contact"];
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(0);
  const lastSectionChangeTime = useRef(0);
  const lastScrollDirection = useRef(null);

  const changeSection = useCallback(
    (newSection) => {
      if (isTransitioning) return;
      if (sections.includes(newSection) && newSection !== activeSection) {
        const now = Date.now();
        // Prevent section changes if less than 800ms have passed since last change
        if (now - lastSectionChangeTime.current < 800) {
          return;
        }

        setIsTransitioning(true);
        setActiveSection(newSection);
        scrollAccumulator.current = 0; // Reset accumulator on section change
        lastSectionChangeTime.current = now;
        setTimeout(() => setIsTransitioning(false), 800);
      }
    },
    [activeSection, isTransitioning, sections]
  );

  useEffect(() => {
    // Only enable wheel navigation on desktop (non-touch devices)
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      return; // Don't prevent scrolling on mobile/touch devices
    }

    const handleWheel = (e) => {
      e.preventDefault();
      if (isTransitioning) return;

      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;
      lastScrollTime.current = now;

      // Reset accumulator if too much time has passed (debounce - increased to 500ms)
      if (timeSinceLastScroll > 500) {
        scrollAccumulator.current = 0;
        lastScrollDirection.current = null;
      }

      // Determine scroll direction
      const currentDirection = e.deltaY > 0 ? "down" : "up";

      // Reset accumulator if direction changed
      if (
        lastScrollDirection.current &&
        lastScrollDirection.current !== currentDirection
      ) {
        scrollAccumulator.current = 0;
      }
      lastScrollDirection.current = currentDirection;

      // Accumulate scroll delta
      scrollAccumulator.current += e.deltaY;

      // Require a much larger scroll threshold (250px) before changing sections
      const scrollThreshold = 250;

      if (Math.abs(scrollAccumulator.current) >= scrollThreshold) {
        const currentIndex = sections.indexOf(activeSection);
        if (
          scrollAccumulator.current > 0 &&
          currentIndex < sections.length - 1
        ) {
          // Scroll down
          changeSection(sections[currentIndex + 1]);
          // Reset accumulator after change
          scrollAccumulator.current = 0;
        } else if (scrollAccumulator.current < 0 && currentIndex > 0) {
          // Scroll up
          changeSection(sections[currentIndex - 1]);
          // Reset accumulator after change
          scrollAccumulator.current = 0;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSection, isTransitioning, changeSection, sections]);

  useEffect(() => {
    // Update section visibility
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        if (section === activeSection) {
          element.classList.add("section-active");
        } else {
          element.classList.remove("section-active");
        }
      }
    });
  }, [activeSection, sections]);

  useEffect(() => {
    // Set initial section as active on mount
    const heroElement = document.getElementById("home");
    if (heroElement) {
      heroElement.classList.add("section-active");
    }
  }, []);

  const handleNavClick = (sectionId) => {
    changeSection(sectionId);
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
        <main className="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
