import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectTile = ({ project, featured = false, onSelect }) => {
  const shownTech = project.technologies.slice(0, 4);
  const extraTech = project.technologies.length - shownTech.length;

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      aria-label={`View ${project.title}`}
      className="group glass glass-hover relative flex h-full w-full flex-col gap-3 overflow-hidden rounded-xl p-5 text-left"
    >
      <ArrowUpRight className="absolute right-4 top-4 size-4 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <img
            src={project.image}
            alt=""
            className="size-7 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="font-serif text-lg font-semibold leading-tight text-foreground">
          {project.title}
        </h3>
      </div>

      {featured && (
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
        {shownTech.map((tech) => (
          <Badge key={tech} variant="outline" className="font-mono text-[0.7rem]">
            {tech}
          </Badge>
        ))}
        {extraTech > 0 && (
          <Badge variant="secondary" className="font-mono text-[0.7rem] text-primary">
            +{extraTech}
          </Badge>
        )}
      </div>
    </button>
  );
};

export default ProjectTile;
