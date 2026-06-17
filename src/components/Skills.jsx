import { Code2, Database, Layers, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRotatingBackground } from "@/hooks/useRotatingBackground";

const skillCategories = [
  {
    title: "Programming Languages",
    Icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "C#", "Java"],
  },
  {
    title: "Frameworks",
    Icon: Layers,
    skills: ["React", "Django", "FastAPI", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Technologies",
    Icon: Wrench,
    skills: ["Git", "Docker", "CI/CD", "AWS", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases",
    Icon: Database,
    skills: ["PostgreSQL", "DynamoDB", "MySQL", "SQLite"],
  },
];

const Skills = () => {
  const backgroundImage = useRotatingBackground();

  return (
    <section
      id="skills"
      className="section-backdrop relative py-24 md:py-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-background/82" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="02 — Toolkit"
            title="Skills"
            align="center"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 100}>
              <Card className="glass glass-hover relative h-full items-center gap-5 overflow-hidden py-8 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <category.Icon className="size-7" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 font-mono text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
