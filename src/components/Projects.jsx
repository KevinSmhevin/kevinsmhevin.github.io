import { useState } from "react";
import ProjectTile from "./ProjectTile";
import ProjectDialog from "./ProjectDialog";
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

// Bento spans on a 6-col grid → rows of 2, 3, 3. Top row (0,1) is featured.
const bentoSpans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const backgroundImage = useRotatingBackground();

  return (
    <section
      id="projects"
      className="section-backdrop relative flex h-[100svh] min-h-[640px] flex-col text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-background/82" />

      <div className="relative z-10 mx-auto flex h-full w-full min-w-0 max-w-6xl flex-col px-6 pb-8 pt-20 md:px-8 md:pt-24">
        <Reveal className="shrink-0">
          <SectionHeading
            eyebrow="03 — Work"
            title="Projects"
            subtitle="A selection of recent work — tap any project for the full story"
            align="center"
          />
        </Reveal>

        <div className="scrollbar-slim min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-1 py-2">
          <div className="grid grid-cols-1 gap-4 sm:auto-rows-[200px] sm:grid-cols-2 lg:grid-cols-6">
            {projects.map((project, index) => (
              <Reveal
                key={project.id}
                delay={(index % 3) * 80}
                className={cn("min-h-[180px] sm:min-h-0", bentoSpans[index])}
              >
                <ProjectTile
                  project={project}
                  featured={index === 0 || index === 1}
                  onSelect={setSelected}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <ProjectDialog
        project={selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      />
    </section>
  );
};

export default Projects;
