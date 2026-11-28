import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import ScrollPortrait from "@/components/scroll-portrait";
import Link from "next/link";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection, { ProjectArchive } from "@/components/section/projects-section";
import JourneySection from "@/components/section/journey-section";

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-20 sm:gap-28">
      <div className="flex flex-col gap-8 sm:gap-12">
        <div className="intro-story mx-auto w-full max-w-4xl">
          <section id="hero" tabIndex={-1} aria-labelledby="hero-heading" className="intro-hero">
            <h1 id="hero-heading">{DATA.name}</h1>
            <p className="intro-role">{DATA.headline}</p>
            <p className="intro-description">{DATA.description}</p>
            <div className="intro-actions">
              <a href="#projects" className="intro-action-primary">View projects</a>
              <a href="#contact" className="intro-action-secondary">Contact</a>
            </div>
          </section>
          <ScrollPortrait src={DATA.avatarUrl} alt="Arya Kharisudin Irfani wearing a black jacket" />
          <section id="about" tabIndex={-1} aria-labelledby="about-heading" className="intro-about scroll-reveal">
            <h2 id="about-heading" className="intro-eyebrow">About</h2>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">{DATA.summary}</p>
          </section>
        </div>
        <ProjectsSection />
      </div>
      <div className="mx-auto w-full max-w-4xl"><JourneySection /></div>
      <section id="skills" aria-labelledby="skills-heading" className="mx-auto w-full max-w-4xl">
        <h2 id="skills-heading" className="mb-4 text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill) => (
            <Badge key={skill} variant="outline" className="min-h-8 px-3 text-sm font-medium">{skill}</Badge>
          ))}
        </div>
      </section>
      <ProjectArchive />
      <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="mx-auto w-full max-w-2xl">
        <ContactSection />
      </section>
    </main>
  );
}
