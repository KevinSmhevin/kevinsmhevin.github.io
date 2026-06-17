import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "./icons";

const ProjectImage = ({ project }) => {
  const inner = (
    <img
      src={project.image}
      alt={project.title}
      className="size-[72px] object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
    />
  );
  const shared =
    "flex h-28 shrink-0 items-center justify-center border-b border-border/60 bg-gradient-to-br from-primary/10 to-transparent";

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={shared}
    >
      {inner}
    </a>
  ) : (
    <div className={shared}>{inner}</div>
  );
};

const ProjectCard = ({ project }) => (
  <Card className="glass glass-hover group relative flex h-full flex-col gap-0 overflow-hidden py-0 text-left">
    <ProjectImage project={project} />
    <div className="flex min-h-0 flex-1 flex-col gap-2.5 p-4">
      <h3 className="font-serif text-xl font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="min-h-0 flex-1 overflow-y-auto pr-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="font-mono">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2 border-t border-border/60 pt-3">
        {project.link && (
          <Button asChild size="sm" className="flex-1">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink /> Live Demo
            </a>
          </Button>
        )}
        {project.github && (
          <Button
            asChild
            size="sm"
            variant={project.link ? "outline" : "default"}
            className="flex-1"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> GitHub
            </a>
          </Button>
        )}
      </div>
    </div>
  </Card>
);

export default ProjectCard;
