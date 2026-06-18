import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import GridOverlay from "./components/GridOverlay";
import Logo from "./components/Logo";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const SECTIONS = ["home", "about", "skills", "projects", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (!element) continue;
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <SidebarProvider>
        <GridOverlay />
        <AppSidebar activeSection={activeSection} />
        <SidebarInset className="min-w-0 overflow-x-clip">
          <header className="sticky top-0 z-30 flex h-12 items-center gap-2 border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl md:hidden">
            <SidebarTrigger />
            <Logo className="size-7" />
            <span className="font-mono text-sm font-semibold">Kevin Paras</span>
          </header>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
