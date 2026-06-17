import { FileText, Mail } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { useRotatingBackground } from "@/hooks/useRotatingBackground";

const socialLinks = [
  {
    name: "GitHub",
    Icon: GitHubIcon,
    url: "https://github.com/KevinSmhevin",
  },
  {
    name: "LinkedIn",
    Icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/kevin-paras-1b7696104/",
  },
  {
    name: "Email",
    Icon: Mail,
    url: "mailto:kevincparas@gmail.com",
  },
  {
    name: "Resume",
    Icon: FileText,
    url: "/Kevin Paras - Resume.pdf",
    download: "Kevin Paras - Resume.pdf",
  },
];

const Contact = () => {
  const backgroundImage = useRotatingBackground();

  return (
    <section
      id="contact"
      className="section-backdrop relative py-24 text-center md:py-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="04 — Contact"
            title="Get In Touch"
            subtitle="Feel free to reach out if you want to collaborate or have any questions!"
            align="center"
          />
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal>
            <Card className="glass flex-row flex-wrap items-center justify-center gap-x-12 gap-y-4 py-6">
              <div className="flex flex-col items-center gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <a
                  href="mailto:kevincparas@gmail.com"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  kevincparas@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Website
                </span>
                <a
                  href="https://kevinparas.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  kevinparas.me
                </a>
              </div>
            </Card>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {socialLinks.map((social, index) => (
              <Reveal key={social.name} delay={index * 80}>
                <a
                  href={social.url}
                  target={social.download ? undefined : "_blank"}
                  rel={social.download ? undefined : "noopener noreferrer"}
                  download={social.download}
                  aria-label={social.name}
                  className="group glass glass-hover relative flex flex-col items-center gap-3 overflow-hidden rounded-xl p-6"
                >
                  <social.Icon className="size-9 text-primary transition-transform group-hover:scale-110" />
                  <span className="font-semibold text-foreground">
                    {social.name}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
