import { cn } from "@/lib/utils";

const SectionHeading = ({ title, eyebrow, subtitle, align = "left" }) => {
  const centered = align === "center";
  return (
    <div className={cn("mb-12", centered ? "text-center" : "text-left")}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-primary to-primary/30",
          centered && "mx-auto",
        )}
      />
      {subtitle && (
        <p className={cn("mt-4 text-muted-foreground", centered && "mx-auto max-w-2xl")}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
