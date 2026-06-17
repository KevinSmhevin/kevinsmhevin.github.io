import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GitHubIcon } from "./icons";

const ProjectDialog = ({ project, onOpenChange }) => (
  <Dialog open={!!project} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-lg">
      {project && (
        <>
          <DialogHeader>
            <div className="flex items-center gap-4">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-transparent">
                <img
                  src={project.image}
                  alt=""
                  className="size-10 object-contain"
                />
              </div>
              <DialogTitle className="font-serif text-2xl">
                {project.title}
              </DialogTitle>
            </div>
          </DialogHeader>

          <DialogDescription className="text-base leading-relaxed text-foreground/80">
            {project.description}
          </DialogDescription>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-primary/10 font-mono text-primary"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <DialogFooter className="gap-2 sm:justify-start">
            {project.link && (
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink /> Live Demo
                </a>
              </Button>
            )}
            {project.github && (
              <Button asChild variant="outline">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon /> GitHub
                </a>
              </Button>
            )}
          </DialogFooter>
        </>
      )}
    </DialogContent>
  </Dialog>
);

export default ProjectDialog;
