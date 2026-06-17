import TypingEffect from "./TypingEffect";
import Reveal from "./Reveal";
import { Button } from "@/components/ui/button";
import { useRotatingBackground } from "@/hooks/useRotatingBackground";
import profileImage from "/assets/images/kevin_profile.png";

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const backgroundImage = useRotatingBackground();

  return (
    <section
      id="home"
      className="section-backdrop relative flex min-h-screen items-center py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/92 via-background/82 to-background/70" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="text-center md:text-left">
            <p className="mb-5 inline-block rounded-full border border-primary/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
              Hello! I'm
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Kevin Paras
            </h1>
            <h2 className="mt-2 font-serif text-2xl font-normal italic text-primary sm:text-3xl lg:text-4xl">
              <TypingEffect text="Software Engineer" speed={100} />
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:mx-0">
              I'm a software developer with 4+ years experience building and
              scaling production applications. I previously worked at Tesla on
              the digital products team.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150} className="flex justify-center">
            <div className="relative">
              <div className="float absolute -inset-6 rounded-full bg-primary/25 blur-3xl" />
              <img
                src={profileImage}
                alt="Kevin Paras"
                className="float relative z-10 w-full max-w-[290px] rounded-2xl border border-primary/30 shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
