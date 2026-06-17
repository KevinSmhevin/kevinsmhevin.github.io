import { useRef, useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";
import { useRotatingBackground } from "@/hooks/useRotatingBackground";

const projects = [
  {
    id: 1,
    title: "Pokebin",
    description:
      "Pokebin is an ecommerce app I built for selling trading card and collectibles with a React frontend using Vite, Tailwind CSS, and Axios and a Python Django REST backend, backed by a Postgres database and AWS infrastructure.",
    technologies: ["React", "Vite", "Tailwind CSS", "Django", "PostgreSQL", "AWS"],
    image: "/assets/images/pokebin_logo.svg",
    link: "https://pokebin.app/",
    github: "https://github.com/KevinSmhevin/ecommerce",
  },
  {
    id: 2,
    title: "ShortURL",
    description:
      "ShortURL is a full-stack URL shortening service with analytics I built. It features URL shortening, click tracking, and engagement metrics. Built with FastAPI (Python) backend and React frontend using Vite, Tailwind CSS, and Axios, with SQLAlchemy for database operations and PostgreSQL support.",
    technologies: ["React", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Tailwind CSS"],
    image: "/assets/images/shorturl_logo.svg",
    link: "https://www.shorter-url.pro/",
    github: "https://github.com/KevinSmhevin/shorter-url",
  },
  {
    id: 3,
    title: "Poke Profile",
    description:
      "A retro-style Pokémon profile quiz built with React and TypeScript. Users complete a guided survey and receive a deterministic Pokémon profile, team lineup, and interactive reveal flow powered by the PokeAPI.",
    technologies: ["React", "TypeScript", "Vite", "PokeAPI", "CSS"],
    image: "/assets/images/poke-profile-icon.svg",
    link: "https://kevinparas.me/poke-profile/",
    github: "https://github.com/KevinSmhevin/poke-profile",
  },
  {
    id: 4,
    title: "JSON Formatter",
    description:
      "A responsive JSON formatter that validates input, pretty-prints output, supports key sorting, and includes an interactive expand/collapse tree with compact mode and clipboard copy for quick sharing.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    image: "/assets/images/json-formatter-icon.svg",
    link: "https://kevinparas.me/json-formatter/",
    github: "https://github.com/KevinSmhevin/json-formatter",
  },
  {
    id: 5,
    title: "Chef Quackly",
    description:
      "Chef Quackly is a chef React + AI recipe app integrating LLMs that helps you find recipes based on provided ingredients.",
    technologies: ["React", "AI/LLM", "JavaScript"],
    image: "/assets/images/rubber-duck.png",
    link: "https://kevinparas.me/chef-quackly/",
    github: "https://github.com/KevinSmhevin/chef-quackly",
  },
  {
    id: 6,
    title: "Quizzical",
    description:
      "Quizzical is a simple React trivia quiz app where you can test your trivia knowledge skills!",
    technologies: ["React", "JavaScript", "API"],
    image: "/assets/images/quiz.png",
    link: "https://kevinparas.me/quizzical/",
    github: "https://github.com/KevinSmhevin/quizzical",
  },
  {
    id: 7,
    title: "Watch-games",
    description:
      "Watch-games is a simple twitch api app to find random streamers by video game.",
    technologies: ["React", "Twitch API", "JavaScript"],
    image: "https://i.imgur.com/RFlYkt9.png",
    link: "https://kevinsmhevin.github.io/watch-games/",
    github: "https://github.com/KevinSmhevin/watch-games",
  },
  {
    id: 8,
    title: "React Components Library",
    description:
      "A collection of reusable React components library with customizable styling and modern design patterns.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/assets/images/react-icon.svg",
    link: null,
    github: "https://github.com/KevinSmhevin/react-components",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const backgroundImage = useRotatingBackground();

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;
    setIsAtEnd(Math.abs(el.scrollLeft + el.clientWidth - el.scrollWidth) < 20);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScrollPosition();
    el.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);
    return () => {
      el.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  const handleScrollClick = () => {
    const el = scrollRef.current;
    if (!el) return;
    const amount =
      window.innerWidth >= 900 ? el.clientWidth : el.clientWidth * 0.8;
    el.scrollBy({ left: isAtEnd ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="section-backdrop relative py-24 text-center md:py-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-background/82" />

      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[1600px] flex-col gap-4 px-6 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="03 — Work"
            title="Projects"
            subtitle="Here are some of my recent projects"
            align="center"
          />
        </Reveal>

        <div
          ref={scrollRef}
          className="flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5 pt-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:h-2"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="h-[405px] shrink-0 basis-[calc(100vw-4rem)] snap-start sm:basis-[calc((100%-1.5rem)/2)] lg:max-w-[367px] lg:basis-[calc((100%-3rem)/3)]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleScrollClick}
          className="group mx-auto flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
        >
          <ChevronRight
            className={cn(
              "size-5 text-primary transition-transform",
              isAtEnd ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1",
            )}
          />
          {isAtEnd ? "Scroll to see previous projects" : "Scroll to see more projects"}
          <ChevronRight
            className={cn(
              "size-5 text-primary transition-transform",
              isAtEnd ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1",
            )}
          />
        </button>
      </div>
    </section>
  );
};

export default Projects;
