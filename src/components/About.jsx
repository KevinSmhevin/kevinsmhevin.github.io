import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { useRotatingBackground } from "@/hooks/useRotatingBackground";

const details = [
  { label: "Full Name", value: "Kevin Paras" },
  { label: "Location", value: "United States" },
  {
    label: "Email",
    value: (
      <a
        href="mailto:kevincparas@gmail.com"
        className="text-primary underline-offset-4 hover:underline"
      >
        kevincparas@gmail.com
      </a>
    ),
  },
  {
    label: "Website",
    value: (
      <a
        href="https://kevinparas.me"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline-offset-4 hover:underline"
      >
        kevinparas.me
      </a>
    ),
  },
];

const About = () => {
  const backgroundImage = useRotatingBackground();

  return (
    <section
      id="about"
      className="section-backdrop relative py-24 md:py-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="01 — Background" title="About Me" />
        </Reveal>

        <div className="grid items-start gap-10 md:grid-cols-[2fr_1fr]">
          <Reveal as="div" className="glass rounded-xl p-8">
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm Kevin, a software developer with 4+ years experience
                managing highly scalable applications.
              </p>
              <p>
                I previously worked at{" "}
                <a
                  href="https://www.tesla.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Tesla
                </a>{" "}
                as part of the digital products team, where I built tools and
                infrastructure to support the battery, energy and charging
                products.
              </p>
              <p>
                I'm passionate about building scalable applications and
                exploring new technologies. I enjoy working with React, Python,
                and cloud infrastructure to create impactful solutions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card className="glass glass-hover relative w-full gap-0 divide-y divide-border/60 overflow-hidden py-2">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="px-6 py-4 transition-colors hover:bg-foreground/5"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-foreground">{item.value}</p>
                </div>
              ))}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
